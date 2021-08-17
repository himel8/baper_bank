// functioon for input amount 
function inputAmount(inputId){
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const newInputAmount = parseFloat(inputAmountText);

    // clear 
    inputField.value ='';
    return newInputAmount;
}

// function for total amount 
function totalInput(textId, InputAmount){
    const peviousInput = document.getElementById(textId);
    const peviousInputText = peviousInput.innerText;
    const peviousInputAmount = parseFloat(peviousInputText);
    const newInputAmount = peviousInputAmount + InputAmount;

    peviousInput.innerText = newInputAmount;
    return newInputAmount;
}
// function for balance 
function balance(){
    const Balance = document.getElementById('total-amount');
    const BalanceText = Balance.innerText;
    const BalanceAmount = parseFloat(BalanceText);
    return BalanceAmount;
}

// function for balance calculation
function balanceCalculation(IsAdd, newAmount){
    const Balance = document.getElementById('total-amount');
    const previousBalanceAmount = balance();
    if(IsAdd == true){
        Balance.innerText = previousBalanceAmount + newAmount;
    }
    else{
        Balance.innerText = previousBalanceAmount - newAmount;
    }
    
}


// Deposite section 
const dipositeBtn = document.getElementById('deposite-btn');
dipositeBtn.addEventListener('click', function(){
    // deposite 

    const newDipositeAmount = inputAmount('deposite-input');
    if(newDipositeAmount > 0){
        
    // show total deposite

    const newTotalDipositeAmount = totalInput('deposite-amount', newDipositeAmount);

    // get balance amount

    const totalDepositeBalance = balanceCalculation(true, newDipositeAmount);
    }
})

// Withdraw section
const withdrawBtn = document.getElementById('withdraw-btn');
withdrawBtn.addEventListener('click', function(){
    // withdraw 

    const newWithdrawAmount = inputAmount('withdraw-input');
    const netBalance = balance();

    if (newWithdrawAmount > 0 && newWithdrawAmount < netBalance) {
        
        // show total withdraw

        const newTotalWithdrawAmount = totalInput('withdraw-amount', newWithdrawAmount);

        // get balance amount

        const totalWithdrawBalance = balanceCalculation(false, newWithdrawAmount);
    }
})

