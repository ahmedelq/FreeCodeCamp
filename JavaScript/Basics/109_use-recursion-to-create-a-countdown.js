// Only change code below this line
function countdown(n){
    if (n > 0)
        return [n].concat(countdown(n - 1));
    return [];
  }
  // Only change code above this line
  