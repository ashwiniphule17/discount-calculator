



const elementBill =  document.querySelector('#bill');
const elementDiscount =  document.querySelector('#discount');
const elementCalculator =  document.querySelector('#calculator');
const elementTotal =  document.querySelector('#total');

elementCalculator.addEventListener('click', () => {
   const elementBillvalue = elementBill.value;
   const elementDiscountValue = elementDiscount.value;
   //console.log(elementBillvalue);
   //console.log(elementDiscountValue);
  // validation for discount amount
   const valid = isValid(elementDiscountValue);
   if (valid) {
    const discountAmount = elementBillvalue - (elementBillvalue * elementDiscountValue) / 100;
    console.log(discountAmount);
 
    elementTotal.innerHTML = `Total Amount to Pay is : ${discountAmount}`;
   }else{
    alert(`Entered Discount amount is not correct : ${elementDiscountValue}`)
   }

// validation for neagative bill 
   const validBill = isValid(elementBillvalue);
   if (validBill) {
    const discountAmount = elementBillvalue - (elementBillvalue * elementDiscountValue) / 100;
    console.log(discountAmount);
 
    elementTotal.innerHTML = `Total Amount to Pay is : ${discountAmount}`;
   }else{
    alert(`Entered Bill amount is Negative : ${elementBillvalue}`)
   }
} );

function isValid(elementDiscount){
if (elementDiscount <0 || elementDiscount >100) {
    return false;
}else{
    return true;
}
};

function isValid(elementBill){
    if (elementBill <0 ) {
        return false;
    }else{
        return true;
    }
    };
