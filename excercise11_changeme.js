function changeMe(arr) {
  var obj = {
    firstName: "",
    lastName: "",
    gender: "",
    age: 0,
  }
 for(i = 0; i < arr.length; i++){
   obj.firstName = arr[i][0];
   obj.lastName = arr[i][1];
   obj.gender = arr[i][2];
   if(arr[i][3] === undefined) {
     obj.age = "invalid Birth Year";
      } else {
        obj.age = 2018 - (arr[i][3]);
   } console.log(obj);
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male'], ['Riadji', 'R', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 36 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
