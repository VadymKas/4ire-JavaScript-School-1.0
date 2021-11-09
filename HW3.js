//example 1

let filterBy = (ar, selector) => ar.filter( elem => typeof(elem) != selector );
filterBy(['hello', 'world', 23, '23', null], 'string'); // [23, null]


//example 2

let filterBy = (arr, selector) => {
  let newArray = [];  
  arr.map(item => typeof(item) != selector ? newArray.push(item) : 'not selected' );
  return newArray;
}


//example 3

let filterBy = (arr, selector) => {
  let newArr = [];
  for (let elem of arr) {
    if (typeof(elem) != selector) newArr.push(elem);
  }
  return newArr;
}

filterBy(['hello', 'world', 23, '23', null], 'string'); // [23, null]
