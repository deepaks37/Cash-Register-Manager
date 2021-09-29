var billAmount = document.querySelector("#bill-input");
var cashGiven = document.querySelector("#cash-given");
var buttonCheck = document.querySelector("#btn");
var message = document.querySelector("#error-message");
var noOfNotes = document.querySelectorAll(".no-of-notes")
var availableNotes = [2000, 500, 100, 50, 10, 1]
buttonCheck.addEventListener("click", function valueValidation(){
    hideMessage();
    


    if(Number(billAmount.value) > 0){
        if(Number(cashGiven.value)>=Number(billAmount.value)){
            const amountToBeReturned = cashGiven.value - billAmount.value;
            changeCalculation(amountToBeReturned); 
        }
        if(Number(cashGiven.value)<=Number(billAmount.value)){
            showMessage("Ajj bhi udhar chahiye??");
        }
        if(Number(cashGiven.value)===Number(billInput.value)){
            showMessage("There is nothing to return, you gave proper amount");
        }
        
    }
    else{
        showMessage("Please enter both the fields and they should be more than 0");
    }


});
 
function changeCalculation(returningAmount){
    for (var i = 0; i< availableNotes.length; i++){
        var numberOfNotes = Math.trunc(returningAmount/availableNotes[i]);
        returningAmount %= availableNotes[i];
        noOfNotes[i].innerText = numberOfNotes;
    }
}

function showMessage(messageShown){
    message.style.display = "block";
    message.innerText = messageShown;
}

function hideMessage(){
    message.style.display = "none";
}