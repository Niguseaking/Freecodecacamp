// Explanation
// HTML: The HTML includes an input for cash, a span to display the price, a button to trigger the purchase, and a div to display the change due.
// CSS: The styles make the form visually appealing and easy to use.
// JavaScript:
// The calculateChange function determines the change to be returned based on the price, cash provided, and cash-in-drawer (cid). It uses a dictionary for currency units and their values.
// The button click event handler retrieves the input value and checks if it's sufficient. It then calls calculateChange and displays the result in the change-due div.
// The status messages "INSUFFICIENT_FUNDS", "CLOSED", and "OPEN" are determined based on the cash provided and available in the drawer.
// This implementation satisfies the user stories and provides a simple interface for a cash register application
// let price = 19.5;
// Define the price and cash-in-drawer (cid) variables

// const cash = document.getElementById("cash");
// const change = document.getElementById("change-due");
// const sale = document.getElementById("purchase-btn");
// Define the currency values
// const currencyunit = {
//     "PENNY": 1,
//     "NICKEL": 5,
//     "DIME": 10,
//     "QUARTER": 25,
//     "ONE": 100,
//     "FIVE": 500,
//     "TEN": 1000,
//     "TWENTY": 2000,
//     "ONE HUNDRED": 1000
// };
// function checkcashregister( price, cash, cid) {
//     let changeSum = cash*100 - price*100;
//     let changeSumecheck = changeSum;
//     let change = [];
//     let Status = '';
//     let cidSum= 0;
//     let filteredCid =cid.filter(elem => elem[1] !==0).reverse(); // element 
//     filteredCid.forEach(elem => {
//         let curr = elem[0];
//         let currSum = elem[1]*100;
//         cidSum += currSum;
//         let amount =0;
//         while ( changeSum >= currencyunit[curr] && currSum > 0){
//             amount += currencyunit[curr];
//             changeSum -= currencyunit[curr];
//             currSum -= currencyunit[curr];
//         }
//         if (amount != 0){
//             change.push([curr, amount/100]);
//         }
//     });
//     if (changeSum > 0){
//         Status = 'Insufficient_Funds';
//         change =[];
//     }
//     else if ( changeSum == 0 && changeSumecheck == cidSum){
// Status = 'Closed';
// change = cid;
//     }
// else {
//     status = 'Open';
// }
// return { 'status':Status, 'change': change};
// }
// console.log(checkcashregister(19.5,20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]] 
// ));




// sale.addEventListener("click", () => {
//     const cashvalue = parseFloat(casg.value);
//     const changeDue = cashValu -price;
//     if ( "Customer does not have enough money to purchase the item");
//     return;

// if (cashva === price) {
//     change.innerText ="No change due -customer paid with exact cash"
// }
// });
// const getchange = (changeDue, cid) => {
//     let Totalcid =
// }

// let price = 19.5; // Example price, can be changed for testing

// let cid = [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0]
// ];


// // Function to handle purchase

// document.getElementById("purchase-btn").addEventListener("click", function() {
//     let cash = parseFloat(document.getElementById("cash").value);
//     let changeDue = cash - price;
//     let totalCID = cid.reduce((sum, currency) => sum + currency[1], 0);
//     totalCID = parseFloat(totalCID.toFixed(2)); // Ensure precision

//     if (cash < price) {
//         alert("Customer does not have enough money to purchase the item");
//         return;
//     }

//     if (cash === price) {
//         document.getElementById("change-due").innerText = "No change due - customer paid with exact cash";
//         return;
//     }

//     if (totalCID < changeDue) {
//         document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
//         return;
//     }

//     let change = [];
//     let changeGiven = 0;

//     for (let i = cid.length - 1; i >= 0; i--) {
//         let currencyName = cid[i][0];
//         let currencyTotal = cid[i][1];
//         let currencyValue = currencyValues[currencyName];
//         let currencyAmount = 0;

//         while (changeDue >= currencyValue && currencyTotal >= currencyValue) {
//             changeDue -= currencyValue;
//             changeDue = parseFloat(changeDue.toFixed(2)); // Fix precision issue
//             currencyTotal -= currencyValue;
//             currencyAmount += currencyValue;
//         }

//         if (currencyAmount > 0) {
//             change.push([currencyName, currencyAmount]);
//         }
//     }

//     changeGiven = change.reduce((sum, currency) => sum + currency[1], 0);
//     changeGiven = parseFloat(changeGiven.toFixed(2));

//     if (changeDue > 0) {
//         document.getElementById("change-due").innerText = "Status: INSUFFICIENT_FUNDS";
//     } else if (totalCID === (cash - price)) {
//         document.getElementById("change-due").innerText = `Status: CLOSED ${change.map(c => `${c[0]}: $${c[1].toFixed(2)}`).join(" ")}`;
//     } 

//     else {
//         document.getElementById("change-due").innerText = `Status: OPEN ${change.map(c => `${c[0]}: $${c[1].toFixed(2)}`).join(" ")}`;
//     }
// });



let price = 19.5; // Example price, can be changed for testing

let cid = [
    ["PENNY", 0.5],
    ["NICKEL", 0],
    ["DIME", 0],
    ["QUARTER", 0],
    ["ONE", 0],
    ["FIVE", 0],
    ["TEN", 0],
    ["TWENTY", 0],
    ["ONE HUNDRED", 0]
];

const cash = document.getElementById("cash");
const change = document.getElementById("change-due");
const sale = document.getElementById("purchase-btn");

let currencyUnit = [
    ["PENNY", 0.01],
    ["NICKEL", 0.05],
    ["DIME", 0.1],
    ["QUARTER", 0.25],
    ["ONE", 1],
    ["FIVE", 5],
    ["TEN", 10],
    ["TWENTY", 20],
    ["ONE HUNDRED", 100]
];

sale.addEventListener("click", () => {
    const cashValue = parseFloat(cash.value);
    const changeDue = cashValue - price;

    if (cashValue < price) {
        alert("Customer does not have enough money to purchase the item");
        return;
    }
    
    if (cashValue === price) {
        change.innerText = "No change due - customer paid with exact cash";
        return;
    }

    const changeResult = getChange(changeDue, cid);

    if (changeResult.status === "INSUFFICIENT_FUNDS" || changeResult.status === "CLOSED") {
        change.innerText = `Status: ${changeResult.status} ${formatChange(changeResult.change)}`;
    } else {
        let changeText = `Status: OPEN ${formatChange(changeResult.change)}`;
        change.innerText = changeText.trim();
    }
});

const getChange = (changeDue, cid) => {
    let totalCid = parseFloat(cid.reduce((sum, [_, amount]) => sum + amount, 0).toFixed(2));

    if (totalCid < changeDue) {
        return {
            status: "INSUFFICIENT_FUNDS", 
            change: []
        };
    }

    let changeArray = [];
    let remainingChange = changeDue;

    for (let i = currencyUnit.length - 1; i >= 0; i--) {
        let unit = currencyUnit[i][0];
        let unitValue = currencyUnit[i][1];
        let unitInDrawer = cid[i][1];
        
        if (unitValue <= remainingChange && unitInDrawer > 0) {
            let amountFromUnit = 0;

            while (remainingChange >= unitValue && unitInDrawer > 0) {
                remainingChange = (remainingChange - unitValue).toFixed(2);
                unitInDrawer -= unitValue;
                amountFromUnit += unitValue;
            }

            if (amountFromUnit > 0) {
                changeArray.push([unit, amountFromUnit]);
            }
        }
    }

    if (remainingChange > 0) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    }

    if (changeDue === totalCid) {
        return { status: "CLOSED", change: cid };
    }

    return { status: "OPEN", change: changeArray };
};

const formatChange = (changeArray) => changeArray
    .map(([unit, amount]) => `${unit}: $${amount.toFixed(2)}`)
    .join(", ");
