function pipe() {
  var result = 0;

  for (var i = 0; i < arguments.length; i++) {
    result = arguments.length;
  }

  return result;
}

function addOne(x) {
  return x + 1;
}

 console.log(pipe(1, addOne, addOne));