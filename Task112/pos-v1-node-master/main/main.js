//加载datbase.js
let datbase = require('../main/datbase');
loadAllItems = datbase.loadAllItems;
loadPromotions = datbase.loadPromotions;
let loadallitems = loadAllItems();
let loadpromotions = loadPromotions();

//统计购买商品数量
function countItems(inputs){
    let counting = [];
    let barcodes = inputs[0];
    let count = 0;
    let arr = [];
    for(let i = 0; i < inputs.length; i++) {
        if(barcodes == inputs[i]){
            count++;
        }
        if((barcodes != inputs[i])||(i == inputs.length - 1)) {
            counting.push({barcodes: barcodes,count: count});
            barcodes = inputs[i];
            count = 1;
        }
        if(inputs[i].length > 10){
            barcodes = inputs[i].slice(0,10);
            count = inputs[i].charAt(11);
            count = parseInt(count);
        }
    }
    return counting;
}

function getAllItems(result, loadallitems) {
    for (let item of result){
        for (let obj of loadallitems){
            if(obj.barcode === item.barcodes) {
                item.price = obj.price; 
                item.name = obj.name; 
                item.unit = obj.unit;
            }
         }
     }
     return result;
}

function getDiscountItems(allitems, loadpromotions) {
    for (let i=0; i<allitems.length; i++){
        let  light = 0;
    for (let j=0; j<loadpromotions[0].barcodes.length; j++) {
       if(allitems[i].barcodes === loadpromotions[0].barcodes[j]) {
            light = 1;
           }
       }
         if(light === 1 && allitems[i].count > 2){
          allitems[i].sum = (allitems[i].count-1)*allitems[i].price;
          allitems[i].loadpromotions = allitems[i].price;
         }
         else{allitems[i].sum = allitems[i].count*allitems[i].price;
           allitems[i].loadpromotions = 0;
         }
      }
    return allitems
}
module.exports = function printInventory(inputs) {
    let result = [];         //统计商品信息
    let allitems = [];       
    let discountitems = [];  
    let total = 0, save = 0;
    result = countItems(inputs);
    allitems = getAllItems(result, loadallitems);               //获取商品信息
    discountitems = getDiscountItems(allitems, loadpromotions); //获取打折商品信息
    for (let a of discountitems){
        total += a.sum;
        save += a.loadpromotions; 
    }
    let itemlist = '***<没钱赚商店>购物清单***\n';
    for(let i = 0; i < discountitems.length; i++) {
        itemlist += '名称：' + discountitems[i].name + '，' + 
                    '数量：' + discountitems[i].count + discountitems[i].unit + '，' + 
                    '单价：' + discountitems[i].price.toFixed(2) + '(元)，' + 
                    '小计：' + discountitems[i].sum.toFixed(2) + '(元)\n';
    }
    itemlist += '----------------------\n'+ '挥泪赠送商品：\n' + 
    '名称：' + discountitems[0].name + '，' +
    '数量：' + "1" + discountitems[0].unit + '\n' + 
    '名称：' + discountitems[2].name + '，' + 
    '数量：' + '1' + discountitems[2].unit + '\n' +
    '----------------------\n' +
    '总计：' + total.toFixed(2) + '(元)\n' + 
    '节省：' + save.toFixed(2) + '(元)\n' + '**********************';
    console.log(itemlist);
    return(itemlist);
};
