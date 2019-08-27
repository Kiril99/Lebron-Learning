let firstLengthSide = prompt('Enter a length of side');
let secondLengthSide = prompt('Enter b length of side');
let angle = prompt('Enter angle');

function func(firstLengthSide, secondLengthSide,angle) {

    if (amount <= 0){
        console.log('Invalid data');
    }
    else {
        afterDiscount= amount - ( amount*discount/100 );
        console.log('input data ' + firstLengthSide + '(a length), ' + secondLengthSide + '(b length):'+ angle + '(a-angle):');
        console.log('c length: ' + amount + '');
        console.log('Discount: ' + discount + '');
        console.log('Price without discount: ' + amount + '');
        console.log('Price with discount: ' +afterDiscount.toFixed(2)+'');
        amount = amount - afterDiscount;
        console.log('Saved: '+amount+'');

    }
}
func(firstLengthSide,secondLengthSide,angle);
