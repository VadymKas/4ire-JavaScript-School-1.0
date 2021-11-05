let getData = prompt('Write needed data (like f1,f2,n)', '');

function fibonacciNums(f1 = 0, f2 = 0, n = 0) {
  if (n == 0) { 
    alert(f1);    
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

fibonacciNums(+getData.split(',')[0], +getData.split(',')[1], +getData.split(',')[2]); 
