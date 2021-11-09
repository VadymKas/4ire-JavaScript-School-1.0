function filterBy(arr, selector) {

  //example 1
  let filterBy1 = (ar, selector) => ar.filter( elem => typeof(elem) != selector );

  //example 2
  let filterBy2 = (arr, selector) => {
    let newArray = [];  
    arr.map( item => typeof(item) != selector ? newArray.push(item) : 'not selected' );
    return newArray;
  }

  //example 3
  let filterBy3 = (arr, selector) => {
    let newArr = [];
    for (let elem of arr) {
      if (typeof(elem) != selector) newArr.push(elem);
    }
    return newArr;
  }

  //example 4
  let filterBy4 = (arr, selector) => {
    for (let i = arr.length-1; i >= 0; i--) {
      if (typeof(arr[i]) == selector) arr.splice(i, 1);
    }
    return arr;
  }

  console.log("Result with method .filter:")
  console.log(filterBy1(arr, selector));
  console.log("Result with method .map:")
  console.log(filterBy2(arr, selector));
  console.log("Result with statement for..of:")
  console.log(filterBy3(arr, selector));
  console.log("Result with with statement for:")
  console.log(filterBy4(arr, selector));
}
