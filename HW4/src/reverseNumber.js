function reverseNumber(x) {
    var result = x.toString().split("").reverse().join("")
    return Number(result);
}
reverseNumber(321);
