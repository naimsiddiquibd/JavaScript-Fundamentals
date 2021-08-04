// And
var gotJob = true;
var canRide = true;

if (gotJob == true && canRide == true){
    console.log('Going to buy a bike');
}
else {
    console.log('Can not buy');
}

// Or
var gotJob = true;
var canRide = false;

if (gotJob == true || canRide == true){
    console.log('Going to buy a bike');
}
else {
    console.log('Can not buy');
}