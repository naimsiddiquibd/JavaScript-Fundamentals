function add(num1, num2 = 0){ //default value of num2 is 0

    // num2 = num2 || 0;

    // if (num2 == undefined){
    //     num2 = 0;
    // }

    console,console.log(num1, num2);
    const total = num1 + num2;
    return total;
}
const result = add(15, 17);
console.log(result);