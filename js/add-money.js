document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    // get money and the pin number
    const addMoney=document.getElementById('input-add-money').value;
    const pinNumber=document.getElementById('input-pin-number').value;
    

    // verify pin
    if(pinNumber == '123')
    {
        const balance=document.getElementById('account-balance').innerText;
        const addMoneyNumber=parseFloat(addMoney);
        const balanceNumber=parseFloat(balance);
        // new Balance
        const  newBalance= addMoneyNumber + balanceNumber;
        console.log(newBalance);
        // update balance  with UI
        document.getElementById('account-balance').innerText=newBalance;


    }
    else{
        alert('Wrong Password')
    }



})