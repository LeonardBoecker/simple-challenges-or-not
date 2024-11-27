// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)]; //return one of the four DNA bases
};

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
        newStrand.push(returnRandBase()); //acording to each DNA base created makes a strand with 15 DNAs on it
    }
    return newStrand; // return it 
};

//start creater function
const pAequorFactory = (number, another_pAequor) => {

    let random_pAequor = {
    
        number: number === number ? number = 'badcopy' : number, // need to improve mainly here
        //option to create a sequence of DNA, target is make it ramdomly
        randomP_Aequor: another_pAequor !== undefined ? another_pAequor : mockUpStrand(),
        get getPAequor() { //get to know what we talking about
            return this.randomP_Aequor;
        },
        mutate: function () {
            let basedWhere = Math.floor(Math.random() * 15); // select ramdomly where to chance in DNA strand
            let mutated = this.getPAequor; //the object select will be changed
            if (mutated[basedWhere] === 'A') { //if A or T or C or G it cannot be the same as before
                while (mutated[basedWhere] === 'A') { //then WHILE it is ramdomly the same, change it
                    mutated[basedWhere] = returnRandBase();
                }
            } else if (mutated[basedWhere] === 'T') {
                while (mutated[basedWhere] === 'T') {
                    mutated[basedWhere] = returnRandBase();
                }
            } else if (mutated[basedWhere] === 'C') {
                while (mutated[basedWhere] === 'C') {
                    mutated[basedWhere] = returnRandBase();
                }
            } else if (mutated[basedWhere] === 'G') {
                while (mutated[basedWhere] === 'G') {
                    mutated[basedWhere] = returnRandBase();
                }
            }
            console.log(`index modified ${basedWhere}`); //I put this console in here just to know which one I am relay changing
            return mutated; //retunr the object mutated
        },
        compareDNA: function (pAequor) {
            // could be a FOR but I prefer the while and used the DO/WHILE to keep mind working
            let count = 0;
            let calcInPerent = 0;
            let numberOfTimes = 0;
            let id = this.number; // the id is to have the NUMBER identification
            // console.log(this.getPAequor); // was used ti check while i was doing the codetask
            do {
                if (this.getPAequor[count] === pAequor[count]) {//compare PAequor with some new PAequor
                    numberOfTimes++;
                }
                calcInPerent = numberOfTimes + (100 / 15) * numberOfTimes; //calc in percent acording to the number -->
                //--> of index, the 15 is that why 
                count++;
            } while (count < this.getPAequor.length);
            //was asked to return it before the compared dna 
            console.log(`specimen #1: ${this.getPAequor} and specimen #2: ${pAequor} have ${calcInPerent}% DNA in common.\nThe identification is ${id}`);
            return this.getPAequor;
        },
        willLikelySurvive: function () {
            //same as compare dna
            let count = 0;
            let calcInPerent = 0;
            let numberOfTimes = 0;
            do {
                if (this.getPAequor[count] === 'C' || this.getPAequor[count] === 'G') { // if C or G are 60 percent increse 
                    //chances to survive of the organnism
                    numberOfTimes++;
                }
                //i didnt used the Mathfloor or round because it is about details
                calcInPerent = numberOfTimes + ((100 / 15) * numberOfTimes);
                count++;
            } while (count < this.getPAequor.length)
            if (calcInPerent >= 60) {
                return true; // survive 60percent higher 
            } else {
                return false; // probably die if 60 percent lower
            }
        },
    }
    return random_pAequor;
}
// two objects bellows to compare and to mutate() and also compare 
const newP = pAequorFactory(1);
const newP2 = pAequorFactory(2);

// console.log(newP.getPAequor);
// console.log(newP2.getPAequor);
// console.log(newP2.compareDNA(newP2.getPAequor));

// console.log(newP.willLikelySurvive()); // pass the object and it will say if it will survive

let t_pertime = 31; // to make more than 1 per time just change the pertime variable
let startIndex = 1;
function create30() { //this function is to create 30 organisms per time
    const pAequors = []; // creatiing an empty array 
    while (t_pertime > startIndex) {
        const newId = startIndex;
        const newPAequor = pAequorFactory(newId); // to use factory as the organism dont need name but ID
        //the ID is an increment of the startindex, giving option to creating after that even it is a silly program
        //but the mind for I put it on
        pAequors.push(newPAequor); // as newPAequor is an array i pushed inside another array pAequor
        startIndex++;
    }
    return pAequors;
};

const new30P = create30(1); // test to create 30 per time giving the start point in a variable new30p
console.log(Object.keys(new30P)); // show the 30 inside the array
