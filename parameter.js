function bringBurger(dollar){
    console.log('To buy a burger ', dollar);
}
bringBurger(10)

function bringBurger(dollar){
    console.log('To buy a burger ', dollar);
}
var money = 10;
bringBurger(money);

function bringBurger(dollar){
    console.log('To buy a burger ', dollar);
    console.log('give me a burger');
    var burgerPrice = 10;
    var burgerQuantity = dollar / burgerPrice;
    return burgerQuantity;
}
var money = 10;
var burger = bringBurger(money);
console.log('take the burger',burger);