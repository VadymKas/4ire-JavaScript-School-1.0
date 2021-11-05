function fibonacciNums(f1, f2, n) {
  if (n == 0) { 
    alert(f2);    
  } else if (n > 0) {     
    for (let i = 3; i <= n; i++) {
      let f3 = f1 + f2;
      f1 = f2;
      f2 = f3;
    }       
    alert(f2);
  } else {
    for (let i = -3; i >= n; i--) {
      let f3 = f2 - f1;
      f2 = f1;
      f1 = f3;
    }       
    alert(f1);
  }
}
