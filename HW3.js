//example 1

let filterBy = (ar, selector) => console.log(ar.filter( elem => typeof(elem) != selector ));


//example 2

let filterBy = (arr, selector) => {
  let newArray = [];  
  arr.map( item => typeof(item) != selector ? newArray.push(item) : 'not selected' );
  console.log(newArray);
}


//example 3

let filterBy = (arr, selector) => {
  let newArr = [];
  for (let elem of arr) {
    if (typeof(elem) != selector) newArr.push(elem);
  }
  console.log(newArr);
}


//example 4

let filterBy = (arr, selector) => {
  for (let i = arr.length-1; i >= 0; i--) {
    if (typeof(arr[i]) == selector) arr.splice(i, 1);
  }
  console.log(arr);
}

filterBy(['hello', 'world', 23, '23', null], 'string'); // [23, null]
