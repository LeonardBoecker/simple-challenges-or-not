//here bellow is all the --predetermined-- CONST CARDS and ARRAYS OF CARDS

// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8];
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9];
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6];
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5];
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6];

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5];
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3];
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4];
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5];
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4];

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4];
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9];
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3];
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3];
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5];


// Add your functions below:

const invalids = [invalid1, invalid2, invalid3, invalid4, invalid5];
const noCompanyDected = [9, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3];
const invalids2 = [noCompanyDected];
//end of --predetermined--

//VALIDATE - FUNCTION
function validateCred(arr) {
    let sum = 0;
    for (let i = arr.length - 1; i >= 0; i--) {  // Iterate from right to left
        let currValue = arr[i];
        if ((arr.length - 1 - i) % 2 !== 0) { // Check for every other digit from the right, not including the check digit
            currValue *= 2;
            if (currValue > 9) {
                currValue -= 9;
            }
        }
        sum += currValue;
    }
    return sum % 10 === 0;
}
//IF CHECK UNCOMMENT BELLOW
/*
validateCred(invalid1);
validateCred(valid1);
*/

//FIND INVALIDS - FUNCTION
let findInvalidCards = (arr) => {
    for (arrElemnt of arr) {
        console.log(validateCred(arrElemnt));
    }
}
//IF YOU WANT TO CHECK UNCOMMENT BELLOW
// findInvalidCards(batch); 

//FIND INVALID COMPNAIES - FUNCTION BELLOW
let idInvalidCardCompanies = (arr) => {
    let count = 0; //COUNTER ACCORDING TO ARRAY LENGTH
    let invalidComp = []; //INVALID COMPANIES DUPLICATE

    //START WITH DO TO NOT WAST TIME WHILE THERE IS ARRAY NESTED
    do {
        //arr[count] is the array inside the array passed as arg and [0] the first data in that arr[count]
        if (Object.is(arr[count][0], 3)) { //as Object.is return true or false
            invalidComp.push('Amex'); // if true will push Amex into the invalid companies
        }
        if (Object.is(arr[count][0], 4)) {
            invalidComp.push('Visa');
        }
        if (Object.is(arr[count][0], 5)) {
            invalidComp.push('Mastercard');
        }
        if (Object.is(arr[count][0], 6)) {
            invalidComp.push('Discover');
        }

        //thoses companies names and values are predetermined - look back to readme if necessary
        count++;
    } while (arr.length > count);

    //consts to check if exists companies or not

    const noDuplicateSet = new Set(invalidComp); // NEW SET TO HAVE NO DUPLICATE AS IT IS UNIQUE VALUE KEYS METHODS
    const noDoubleComp = Array.from(noDuplicateSet); // MAKING SET NEW ARRAY

    const checkIfEmpty = (arr) => arr.length ? arr : false; // check if an array is empty -- FUNCTION

    if (checkIfEmpty(noDoubleComp)) { //if true return companies
        console.log(noDoubleComp); //SHOWING THE COMPANIES NOT DUPLICATED
    } else {
        console.log('Company not found'); // return if not exists companies
    }


    // Bellow I PREFER to leave behind to check in future my thoughts of possibilities
    //   let companies = {

    //     name: 'Amex (American Express)',
    //       id: 3,
    //   {
    //     name: 'Visa',
    //       id: 4
    //   },
    //   {
    //     name: 'Mastercard',
    //       id: 5
    //   },
    //   {
    //     name: 'Discover',
    //       id: 6
    //   }
    // };

    // for (const company in companies){
    //   console.log(company);
    // }

}

//bellow check if array of cards bellong to which compani - FUNCTION
idInvalidCardCompanies(invalids);   //return the companies if exists
idInvalidCardCompanies(invalids2); //returns company not found




