let firstSide = parseFloat(prompt('Enter length of side A'));
let secondSide = parseFloat(prompt('Enter length of side B'));
let angle = prompt('Enter angle');

function calc(firstSide,secondSide,angle) {
    var y = Math.cos(angle * Math.PI / 180);
    var c2 = (secondSide*secondSide) + (firstSide*firstSide) - (2*secondSide*firstSide)* y;
    var c = Math.sqrt(c2);
    var p = c + secondSide + firstSide;
    var pP = p/2;
    var s2 = pP * (pP-firstSide)*(pP-secondSide)*(pP-c);
    var s = Math.sqrt(s2);
    console.log(`
                 input data ${firstSide}(a length), ${secondSide}(b length), ${angle}(α- angle):
                 C length: ${Math.round(c)}
                 square:'${Math.round(s)}
                 perimeter: ${Math.round(p)}
                 `);
}
calc(firstSide,secondSide,angle);
