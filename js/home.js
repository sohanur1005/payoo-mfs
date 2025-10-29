// step 1 add money to the account
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
    

    // step-2 get money to be added  to the account
    const addMoney=document.getElementById('input-add-money').value;
    console.log(addMoney);

    //  get the pin provided
    const pinNumber=document.getElementById('input-pin-number').value;
    console.log(pinNumber)

    // step-3 verify pin number
    if(pinNumber=='123')
    {
        console.log('Adding money to your account');
         //step-4 get the current balance
    const balance=document.getElementById('account-balance').innerText;
    console.log(balance)

    // step-5 add money witth curent balance
    const addMoneyNumber=parseFloat(addMoney);
    const balanceNumber=parseFloat(balance);
    const newBlance=addMoneyNumber + balanceNumber;
    console.log(newBlance)

    // step-6 update the balance in the UI
    document.getElementById('account-balance').innerText=newBlance;

    }
    else{
        alert('Wrong Pin! please try again')
    }
   
})