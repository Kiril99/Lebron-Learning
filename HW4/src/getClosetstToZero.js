function getClosestToZero(a,b,c,d,e) {
    var goal = 0;
    var counts  = Array.prototype.slice.call(arguments);
    var closest = counts.reduce(function(prev, curr) {
        return (Math.abs(curr - goal) < Math.abs(prev - goal) ? curr : prev);
    });
    return closest

}
getClosestToZero(2,3,4,5,1);
