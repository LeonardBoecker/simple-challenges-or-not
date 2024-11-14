//funtiction declared in ES6 arrow function
let reverseArray = (array) => {
    // variables I need with no value for now or empty;
    let toReturn;
    let arrayReturn = [];
    // created a copy not to prejudice original array
    let arrayCopy = array.slice();
  
    // for will iterate through out the copy subtract the arrowLength until it is over
    for (let i = arrayCopy.length; arrayCopy.length !== 0; arrayCopy.length--) {
      // the last element is saved into toReturn
      toReturn = arrayCopy[arrayCopy.length -1];
      /* push() adds an element in the end of the array
      so toReturn gets the last element and bellow it adds to the array I want to return - arrayReturn */
      arrayReturn.push(toReturn);
      /*to make it reverse I remove that last element from the copy to not add it again 
      or give an unexpected error with splice in wich takes the last element -1 
      and removes until the mark index 1 but not index 1 itself*/
      array.splice(-1, 1);
    }
    return arrayReturn;
  }
  
  //to test the logic
  
  const sentence = ['sense.', 'make', 'all', 'will', 'This'];
  
  console.log(reverseArray(sentence))
  // Should print ['This', 'will', 'all', 'make', 'sense.']; --- and that prints usashuahsuah