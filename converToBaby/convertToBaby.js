//funciton in arrow format as ES6
let convertToBaby = (array) => {
    //new array to store the new change
    let arrayNew = [];
    //simple for while length is passing through
    for (let i = 0; i < array.length; i++) {
        //concat the new word baby with the array location index i and pushing it into arrayNew
        arrayNew.push(`baby ${array[i]}`);
    }
    return arrayNew; // return arrayNew with the baby and other strings together
}

//to test the code

const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];

console.log(convertToBaby(animals));
// will print 
/*[ 'baby panda',
  'baby turtle',
  'baby giraffe',
  'baby hippo',
  'baby sloth',
  'baby human' ]*/