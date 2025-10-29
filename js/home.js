// step 1 add money to the account
document.getElementById('btn-add-money').addEventListener('click',function(event){
    // prevent page reload after form submit
    event.preventDefault();
    

    // get money to be added  to the account
    const addMoney=document.getElementById('input-add-money').value;
    console.log(addMoney);

    // get the pin provided
    const pinNumber=document.getElementById('input-pin-number').value;
    console.log(pinNumber)

    // verify pin number
    if(pinNumber=='123')
    {
        console.log('Adding money to your account');

    }
    else{
        alert('Wrong Pin! please try again')
    }
})