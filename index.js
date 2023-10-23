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
            times = 0
            const transferAmount = parseFloat(document.getElementById("transferAmount").value);
            var trnfrTo = parseFloat(document.getElementById("Norek").value);
            while(times<3){
                if (transferAmount != null && trnfrTo != null){
                    if (isNaN(transferAmount) && isNaN(trnfrTo)) {
                        alert("Please enter a number");
                        return;
                    }
                    
                    if (bankBalance >= transferAmount) {
                        bankBalance -= transferAmount;
                        temp1 = prompt("Please enter your passcode to complete the transaction.")
                        if(temp1 == currentPasscode){
                            updateBalance();
                            updateTransactionHistory(`Transferred $${transferAmount} to ${trnfrTo} `);
                        }
                        else{
                            times += 1
                            alert("WRONG PASSCODE")}
                    } else {
                        alert("Insufficient funds.");
                    }
                }else{
                    alert("check input")
                }
            }
            if(times>2){
                alert("TOO MANY ATEMPTS. LOGGING OUT")
                location.replace("index.html")
            }
        }

  
        document.getElementById("transferButton").addEventListener("click", transferMoney);

        updateBalance();
        updateTransactionHistory("Initial Balance: $1000");