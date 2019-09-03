function getMin(a,b,c,d){
    var result;
    for (var i =0; i< arguments.length; i++){
        if (arguments[i]<arguments[i+1] || arguments[i]<arguments[i-1]){
            result =arguments[i];
        }
    }
    return result
}
console.log(getMin(2,3,0,1));
