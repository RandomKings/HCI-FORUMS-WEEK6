let times = 0
var currentPasscode ="Passco";
function requestPasscode() {
    var passcode = prompt("Please enter your 6-digit passcode: note its Passco");
    if (passcode == null) {
        
        alert("Please enter passcode");
    } else if (passcode.length == 6 && passcode == currentPasscode) {

        alert("Access granted!");
        window.location.href = "m-bank.html";
    } else {
        
        alert("Invalid passcode. Please enter a 6 alphanumeric passcode.");
    }
}

let bankBalance = 1000;
        let transactionHistory = ["Initial Balance: $1000"];

        function updateBalance() {
            const balanceElement = document.getElementById("balanceAmount");
            balanceElement.textContent = `$${bankBalance}`;
        }

     
function updateTransactionHistory(transaction) {
    const transactionList = document.getElementById("transactionList");
    const listItem = document.createElement("li");
    listItem.textContent = transaction;
    transactionList.appendChild(listItem);
}


function transferMoney() {
    const transferAmount = parseFloat(document.getElementById("transferAmount").value);
    const trnfrTo = parseFloat(document.getElementById("Norek").value);

    if (isNaN(transferAmount) || isNaN(trnfrTo)) {
        alert("Please enter valid numbers.");
    } else if (bankBalance < transferAmount) {
        alert("Insufficient funds.");
    } else {
        
            const temp1 = prompt("Please enter your passcode to complete the transaction.");

            if (temp1 !== null) {
                if (temp1 === currentPasscode && times<3) {
                    bankBalance -= transferAmount;
                    updateBalance();
                    updateTransactionHistory(`Transferred $${transferAmount} to ${trnfrTo}`);
                } else {
                    alert("Wrong passcode. Transaction canceled.");
                    times+=1
                    if (times>2){
                        alert("too many attempts logging out!!!!!!")
                        location.assign("index.html")
                    }
                
            }
        } else {
            alert("Transaction canceled.");
        }
    }
}





  
        document.getElementById("transferButton").addEventListener("click", transferMoney);

        updateBalance();
        updateTransactionHistory("Initial Balance: $1000");
