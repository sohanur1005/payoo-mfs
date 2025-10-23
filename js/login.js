
// set event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // set prevent default behaviour (prevent reloading browser)
    event.preventDefault();


    // get the phone number
    const mobileNumber=document.getElementById('mobile-number').value;
    const pinNumber=document.getElementById('pin-number').value;

    console.log(mobileNumber,pinNumber);

    // bad  way to validate
    if(mobileNumber == '5' && pinNumber =='123')
    {
        console.log('You are log in');
    }
    else{
        alert('wrong number or pin');
    }



})


