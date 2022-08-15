const inputPrice = document.querySelector('#inputPrice');
const inputCoupon = document.querySelector('#inputCoupon');
const buttonAnswer = document.querySelector('#buttonAnswer');
const answerSection = document.querySelector('#answerSection');

let couponsInformation = {
    'kikeproxy123' : 45,
    'kikeproxy567' : 20,
    'kikeruiz1234' : 15
}



buttonAnswer.addEventListener('click', doTheOperation);



function doTheOperation () {
    const price = Number(inputPrice.value);
const coupon = inputCoupon.value;

    if ( !price || !coupon) {
        answerSection.innerText = 'Write the form, please!';
        return;
    }

    let discount;
    let finalPrice;

    if(couponsInformation[coupon]){
        discount = couponsInformation[coupon];
        answerSection.innerText = "The discount is: " + discount;

        finalPrice = ((price)*(100-discount))/100;

        answerSection.innerText = "The discount is " + discount+"%" + " and the final price is: " + "$" +finalPrice;

        
    }
    else {
        answerSection.innerText = "Bad validation of coupon";
        return;
    }

    
}