function getChange(bill, payment) {
    if (payment <= bill) {
        console.log("No change");
        return;
    }
    var changeCoins = Math.round((payment - bill)*100, 0);
    var denominations = [2000, 500, 100, 25, 10, 5, 1];
    var changeToGive = [0, 0, 0, 0, 0, 0, 0]
    for (var i=0; i<denominations.length; i++) {
        if (changeCoins > denominations[i]) {
            changeToGive[i] = Math.floor(changeCoins / denominations[i]);
            changeCoins = changeCoins % denominations[i];
        }
    }
    console.log(`Change to give for ${payment} payment and ${bill} purchase:`)
    printChange(changeToGive);
}

function printChange(changeToGive) {
    var singular_names = ["twenty dollar bill",  "five dollar bill",  "one dollar bill",  "quarter",  "dime",  "nickel",  "penny"];
    var plural_names   = ["twenty dollar bills", "five dollar bills", "one dollar bills", "quarters", "dimes", "nickels", "pennies"];

    for (var i=0; i<changeToGive.length; i++) {
        if (changeToGive[i]>0) {
            console.log(changeToGive[i] + " " + (changeToGive[i]>1 ? plural_names[i] : singular_names[i]));
        }
    }
}

getChange(1.83, 2.00);