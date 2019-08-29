let a = parseFloat(prompt('Enter length of side A'));
let b = parseFloat(prompt('Enter length of side B'));
let angle = prompt('Enter angle');

function calc(a,b,angle) {
    var y = Math.cos(angle * Math.PI / 180);
    var c2 = (b*b) + (a*a) - (2*b*a)* y;
    var c = Math.sqrt(c2);
    var p = c + b + a;
    var pP = p/2;
    var s2 = pP * (pP-a)*(pP-b)*(pP-c);
    var s = Math.sqrt(s2);
    console.log('input data '+a+'(a length), '+b+'(b length), '+angle+'(α- angle):');
    console.log('C length:'+c+'');
    console.log('square:'+s+'');
    console.log('perimeter:'+p+'');
}
calc(a,b,angle);
