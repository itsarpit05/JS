
//In JS different types of elements can be put into same array
// JS arrays are dynamic

 const arr = [4,3,5,7,2]

  console.log(arr[4]);
  arr.push(8);    //adds top the last
  console.log(arr);
  arr.pop();    // removes last ele fromn array 
  console.log(arr);

  arr.unshift(6)   // adds ele to first ind 
  console.log(arr);

  arr.shift()   
  console.log(arr);
  
  arr.shift()      //remvoes ele from first ind
  console.log(arr);

  /************************ */
  
  const newArr = arr.join();   //changes array into string formmat .// prints like 3,5,6 without brackets
  
  console.log(typeof newArr);  // STRING


  /******       slice and splice*********************** */
  
  
  const arr1 = [1,2,3,4,5,6]
  
  console.log(arr1);
  console.log('A',arr1);

  console.log('B' , arr1.slice(1,3));   // prints the array from start point to endpoint-1 without modifyying the original array
  console.log(arr1);   // [1,2,3,4,5,6]
  
  console.log('C' , arr1.splice(1,3));   // prints the array from start to end point modifying the original array , removes the ele that are present in spliced array
  console.log(arr1);  // [1,5,6]
  
  
  
  