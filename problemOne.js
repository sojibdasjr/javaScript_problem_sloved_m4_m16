

// 1.	Harry’s mom gave him money and asked him to buy some oranges and apples. Write a program to help Harry calculate how much money the shopkeeper will return.

var momGive = 1000;
var oranges = 320; //per kg
var apple = 240; // per kg

var totalBuy = oranges + apple;
// console.log(totalBuy, 'Total Buy');
var shopkeeperReturn = momGive - totalBuy;
console.log(shopkeeperReturn, 'Shopkeepr Return');  //sloved