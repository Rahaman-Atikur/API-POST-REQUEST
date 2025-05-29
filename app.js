let shops={
    productName:"Rice",
    productPrice:14,
    productAvailability:true,
    productLocation:"atShop"
}
let stringShops=JSON.stringify(shops);
console.log( typeof stringShops);

let objectShops = JSON.parse(stringShops);
console.log( typeof objectShops);