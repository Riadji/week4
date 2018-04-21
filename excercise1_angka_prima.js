function angkaPrima(n) {
  if(n === 1) {
    return false;
  } else {
    if(n === 2) {
     return true 
    } else {
      for (var x = 2; x < n; x++) {
        if(n % x === 0) {
          return false;
        }
      } return true;

    }
  }
}

console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false
