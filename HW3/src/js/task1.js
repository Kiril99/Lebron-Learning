let amount = parseFloat(prompt('Enter the amount of money'));
let discount = parseFloat(prompt('Enter discount'));
let afterDiscount = 0;

function func(amount, discount) {

    if (amount <= 0){
        console.log('Invalid data');
    }
    else {
        afterDiscount= amount - ( amount*discount/100 );
        console.log('input data ' + amount + ' and ' + discount + '(discount):');
        console.log('Price without discount: ' + amount + '');
        console.log('Discount: ' + discount + '');
        console.log('Price without discount: ' + amount + '');
        console.log('Price with discount: ' +afterDiscount.toFixed(2)+'');
        amount = amount - afterDiscount;
        console.log('Saved: '+amount+'');

    }
}
    func(amount,discount);
