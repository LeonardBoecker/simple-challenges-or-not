// Writing the function below
const groceries = (array) => {

    // statements check the length to run properly
    if (array.length === 1) {
        //for index 0 then index 0
      return array[0].item;
    } else if (array.length > 1 && array.length <= 2) {
        // for index between 0 and 2
      return `${array[0]['item']} and ${array[1]['item']}`;
    } else if (array.length >= 3) {
        // for index away from 2
      const lastItem = array.pop().item; // pop last element and return it to lastItem
      const items = array.map(obj => obj.item); // .map create a new array according to array items 
      // less that last item popped out
      return `${items.join(', ')} and ${lastItem}`; // join() makes change in the items according to my
      // wish as I want to comma and space and bring lastItem to finish the challenge
    }
  
  }
  
  //some examples to test it out
  
  console.log(groceries( [{item: 'Carrots'}, {item: 'Hummus'}, {item: 'Pesto'}, {item: 'Rigatoni'}] ));
  // returns 'Carrots, Hummus, Pesto and Rigatoni'
  
  console.log(groceries( [{item: 'Bread'}, {item: 'Butter'}] ));
  // returns 'Bread and Butter'
  
  console.log(groceries( [{item: 'Cheese Balls'}] ));
  // returns 'Cheese Balls'
  
  console.log(groceries([{item: 'Lettuce'}, {item: 'Onions'}, {item: 'Tomatoes'}]));
  
  