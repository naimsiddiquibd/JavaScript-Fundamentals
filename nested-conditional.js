// Example 1:
var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitprince = 10;
var myBudget = 100;

if (danishPrice < myBudget){
    console.log('Will eat danish');
}
else if( butterBreadPrice<myBudget){
    console.log('Will eat butter too');
}
else if(toastBiscuitprince<myBudget){
    console.log('Will eat toast');
}
else{
    console.log('Will eat nothing');
}

// Example 2:
var danishPrice = 50;
var butterBreadPrice = 25;
var toastBiscuitprince = 10;
var packedWell = true;
var myBudget = 100;

if (danishPrice < myBudget){
    if(packedWell = true){
        console.log('Will eat!');
    }
    else{
        console.log('I do not!');
    }
}