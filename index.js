// Code your solutions in this file
/* for (let age = 30; age < 40; age++) {
    console.log(`I'm ${age} years old. Happy birthday to me!`);
    debugger;
  } */

  function writeCards(namesArray, eventString){
    let newArray = []

    for (let i = 0; i < namesArray.length; i++) {
      newArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventString} gift!`);
    }  
      
    return newArray;
  }

  function countDown(countdown){

    while (countdown > -1) {
      console.log(countdown--); 
    }
  }
