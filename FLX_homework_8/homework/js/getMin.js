function getMin () {
    var minvalue = arguments[0];    
for (var i = 0 ; i < arguments.length ; i++) {
    if(arguments[i] < minvalue) {
        minvalue = arguments[i];
    }
}
  return minvalue;
}
console.log(getMin(2,3,1,9,8));
