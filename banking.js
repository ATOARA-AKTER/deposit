/*login section
//document.getElementById('submit-button').addEventListener('click', function(){
    // console.log('submit button clicked');

    //get user email by user form
    const userEmailField = document.getElementById('user-email');
    const userEmail = userEmailField.value;
    //console.log(userEmail);

    //get user password by user form
    const userPasswordField = document.getElementById('user-password');
    const userPassword = userPasswordField.value;
    //console.log(userPassword);

    //check validation
    if (userEmail == 'ruby@gmail.com' && userPassword == 123456) {
        window.location.href = "banking.html";
    }
})*/


//banking section

document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositText = depositTotal.innerText;
    const previousDepositAmount = parseFloat(previousDepositText);

    const newDepositTotal = previousDepositAmount + newDepositAmount ;
    depositTotal.innerText = newDepositTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const balanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = balanceTotalAmount + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;

   depositInput.value = '';
})

document.getElementById('withdraw-button').addEventListener('click', function(){
    //get withdraw input
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawInputText = withdrawInput.value;
    const withdrawInputAmount = parseFloat(withdrawInputText);
    //console.log(withdrawInputAmount);

    // update withdraw 
    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotalText = withdrawTotal.innerText;
    const previousWithdrawTotalAmount = parseFloat(previousWithdrawTotalText);
    const newWithdrawTotal = previousWithdrawTotalAmount + withdrawInputAmount;
    withdrawTotal.innerText = newWithdrawTotal;

    //update balance
    const balanceTotal = document.getElementById('balance-input');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotalAmount = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotalAmount - newWithdrawTotal;
    balanceTotal.innerText = newBalanceTotal;

    //clear the value
    withdrawInput.value = '';
})