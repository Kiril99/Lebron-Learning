function reverseNumber(x) {
   return  parseFloat(x.toString().split("").reverse().join("")) * Math.sign(x);
}
console.log(reverseNumber(321));
