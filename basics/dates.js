  let myDate = new Date();
  console.log(myDate);  // prints  2025-07-26T12:25:31.012Z   which if ofc not readable
  console.log(myDate.toString());  // prints Sat Jul 26 2025 12:26:30 GMT+0000 (Coordinated Universal Time)
  console.log(myDate.toDateString()); // Sat Jul 26 2025
  console.log(myDate.toISOString());  // 2025-07-26T12:27:49.220Z
  console.log(myDate.toLocaleDateString());  // 7/26/2025
  console.log(myDate.toLocaleString());  // 7/26/2025, 12:28:44 PM
  console.log(myDate.toLocaleTimeString()); // 12:29:09 PM

  let dateCreated = new Date(2025 , 0 , 2);  // months starts from 0 ->Jan (year,month,day)
  console.log(dateCreated.toDateString());   // Thu Jan 02 2025

  let dateAnother = new Date("05-01-2004");  // particluar format can also be passed
  console.log(dateAnother.toLocaleString());  // 5/1/2004, 12:00:00 AM


  let myTime = Date.now();
  console.log(myTime);   // total milisecon from 01 Jan 1970 , reference date in ECMA 

  /*.................INTERVIEW QUESN ...........................*/

  /*....Convert time to seconds.....*/

  console.log(Math.floor(Date.now()/1000));   // gives seconds

  
  
  
  
  
  
  
  
  
  
  