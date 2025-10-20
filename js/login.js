
// set event handler
document.getElementById('btn-login').addEventListener('click',function(event){
    // set prevent default behaviour (prevent reloading browser)
    event.preventDefault();
    console.log('login button clicked')
    // get the phone number
    const mobileNumber=document.getElementById('mobile-number').value;
    const pinNumber=document.getElementById('pin-number').value;

    console.log(mobileNumber,pinNumber);



})

console.log('udhheu')