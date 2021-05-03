function aVeryBigSum(ar) {
    // Write your code here
    var bigSum = 0;
    for(var i = 0; i<ar.length; i++){
        bigSum += ar[i];
    }
    return bigSum;
}
console.log(aVeryBigSum([1, 2, 3, 4]));