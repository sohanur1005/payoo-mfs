document.getElementById('btn-cashout').addEventListener('click',function(event){
    event.preventDefault();

    const cashOutMoney=document.getElementById('input-cash-out').value;
    const pinNumber=document.getElementById('input-cashOut-pin-number').value;
    console.log(cashOutMoney,pinNumber);

    if(pinNumber == '123')
    {
        const balance=document.getElementById('account-balance').innerText;
        const cashOutBalance= parseFloat(cashOutMoney);
         const balanceNumber=parseFloat(balance);

         if(cashOutBalance>balance)
         {
            alert('Insufficient Balance')
         }
         else{
            const newBalance=balanceNumber - cashOutBalance ;
         console.log(newBalance)
         document.getElementById('account-balance').innerText=newBalance;
         }
         

    }
    else
    {
        alert('Wrong Password');
    }




});