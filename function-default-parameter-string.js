function fulName(firstName, lastName = 'Siddiqui'){
    const name = firstName + ' ' + lastName;
    return name;
}
const myName = fulName('Naim');
console.log(myName);
