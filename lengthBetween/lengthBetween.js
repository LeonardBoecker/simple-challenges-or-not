//function starts
const subLength = (word, sC) => {
    //three variables to make comparison
    let check1;
    let check2;
    let check3;

    // the for iterate is for pass through each character then ...
    for (let i = 0; i < word.length; i++) {
        //this if start to check if it is true about to have a single character - sC
        // if so it goes next
        if (word[i] === sC) {
            // since behind if has value it comes here and another time it is true because
            // I didnt set a value when I first declared
            // then it set check1 to the value it find out         
            if (check1 === undefined) {
                check1 = i;
                //as it is true it goes out to for() iterate once again
                //and as it now has value it comes to else bellow
            } else {
                // as if bellow has no value it is true and set a value acording to for condition i
                if (check2 === undefined) {
                    check2 = i;
                    //if not it goes to else bellow and so on
                } else {
                    if (check3 === undefined) {
                        check3 = 0;
                        // console.log(check3);
                    }
                }
            }
        }
    }
    //bellow I check according to the condition the challenge brings to 
    if (check1 !== undefined && check2 === undefined) {
        return 0;
    } else if (check1 !== undefined && check2 !== undefined && check3 === undefined) {
        return (check2 - check1) + 1;
    } else if (check1 === undefined && check2 === undefined & check3 === undefined) {
        return 0;
    } else if (check2 === undefined && check3 === undefined) {
        return 0;
    } else if (check3 === 0) {
        return check3;
    }

}
// bellow some examples to check it out
console.log(subLength('funny', 'n'));
console.log(subLength('Saturday', 'a')); // returns 6
console.log(subLength('summer', 'm')); // returns 2
console.log(subLength('digitize', 'i')); // returns 0
console.log(subLength('cheesecake', 'k')); // returns 0