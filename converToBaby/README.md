Write a function, convertToBaby(), that takes in an array as an argument
and, using a loop, returns a new array with each string in the array prepended with 'baby '

----------------
can´t use map() like animals.map(animal => "baby " + animal);
----------------
const animals = ['panda', 'turtle', 'giraffe', 'hippo', 'sloth', 'human'];
convertToBaby(animals); 
// Should return ['baby panda', 'baby turtle', 'baby giraffe', 'baby hippo', 'baby sloth', 'baby human'];