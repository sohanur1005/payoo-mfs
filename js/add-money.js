document.getElementById('btn-add-money').addEventListener('click',function(event){
    event.preventDefault();

    // get money and the pin number
    const addMoney=document.getElementById('input-add-money').value;
    const pinNumber=document.getElementById('input-pin-number').value;
    console.log(addMoney,pinNumber)



})