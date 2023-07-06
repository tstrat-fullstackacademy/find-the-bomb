/* 
    Oh No! A madman has released bombs into our code!
    We can defuse it if we know where the bombs are located.
    Find out where the bombs are hiding!

    Use loops // array methods // object knowledge etc, to find the locations
    of these bombs and remove them
*/

/* ------ FIRST BOMB ----- */

// Find the index of the first bomb using a for loop!
// Then, once you know the index, remove it with the Array.splice() method!
let firstBomb = ['dud', 'dud', 'dud', 'dud', 'bomb', 'dud', 'dud', 'dud', 'dud']
let firstBombIndex

//  ---------- Code goes below this line ------------ //

// find the index of the firstBomb
for (let i = 0; i < firstBomb.length; i++) {
  if (firstBomb[i] === 'bomb') {
    // We found the bomb! Mark its location
    firstBombIndex = i
  }
}

// remove 1 element at the bombs location
firstBomb.splice(firstBombIndex, 1) 


// ---------------------------------------------------//



/* ------ SECOND BOMB ----- */

// This bomb is like the first, but has some other data to throw you off.
// Take care of it just like before!

let secondBomb = ['dud', 3, true, undefined, 'dud', 'bomb', 'dud', false]
let secondBombIndex

//  ---------- Code goes below this line ------------ //

// We can solve it exactly the same way with tripple equals!
for (let i = 0; i < secondBomb.length; i++) {
  if (secondBomb[i] === 'bomb') {
    // We found the bomb! Mark its location
    secondBombIndex = i
  }
}

// remove 1 element at the bombs location
secondBomb.splice(secondBombIndex, 1) 




// ---------------------------------------------------//


/* ------ THIRD AND FOURTH BOMB ----- */

// Now there are two bombs at the same time!
// How can we use what we know about finding bombs to find both at once?
// You must find and remove both bombs for this one to count

let thirdAndFourthBombs = [
  'dud',
  'dud',
  'bomb',
  'dud',
  'dud',
  'dud',
  'dud',
  'dud',
  'dud',
  'dud',
  'bomb',
  'dud',
  'dud',
  'dud',
  'dud',
]

let thirdBombIndex
let fourthBombIndex

//  ---------- Code goes below this line ------------ //

// We can either do two loops or try to do it in one loop
// When removing elements from arrays a good way to approach it
// is to remove from the back to the front to avoid "shifting" elements

for(let i = thirdAndFourthBombs.length-1; i >= 0; i--) {
  if ( thirdAndFourthBombs[i] === 'bomb' ) {
    thirdAndFourthBombs.splice(i, 1)
  }
}

/* This only works backwards, if you do it forwards there is a chance you will
skip bombs that are right next to each other */


// ---------------------------------------------------//



/* ------ FIFTH BOMB ----- */

// The mastermind knew we were getting comfortable with arrays, so they inserted it into a String instead!
// Now not only do we still need the bomb's location, but we need a different way to remove it from a string.
//  HINT: (Strings are "arrays" of characters)
let fifthBomb = 'Iamhidingthebombinplainsight'
let fifthBombIndex

//  ---------- Code goes below this line ------------ //

// How do we find the index?  Well we can start by finding the 'b' and seeing if the next letters are 'omb'
for (let i = 0; i < fifthBomb.length; i++ ){
  if (fifthBomb[i] === 'b') {
    // check that the next characters are 'omb' if not keep looking
    if (fifthBomb[i+1] === 'o' && fifthBomb[i+2] === 'm' && fifthBomb[i+3] === 'b') {
      fifthBombIndex = i // found it!
    } 
  }
}



// Once you know the index, remove the bomb from the string
// Careful * Strings are immutable (meaning you'll need to use = to reassin them)
// Example:  let name = 'Travis Stratton'
//           name = name.slice(0, 7) // cuts the string and reassigns original to new value
//           console.log(name) // 'Travis'

fifthBomb = fifthBomb.slice(0, fifthBombIndex) + fifthBomb.slice(fifthBombIndex+4)

// ---------------------------------------------------//

/* ------ SIXTH BOMB ----- */
// This bomb is a bit trickier.
// Its the same sentence as above, but reversed!  The bomb is still there, just harder to get to
// How can we rewrite the previous answer to help solve this one?

let sixthBomb = 'thgisnialpnibmobehtgnidihmaI'
let sixthIndex

//  ---------- Code goes below this line ------------ //

// Same as above but lets go backwards
for (let i = sixthBomb.length-1; i >= 0; i-- ){
  if (sixthBomb[i] === 'b') {
    // check that the next characters are 'omb' if not keep looking
    if (sixthBomb[i-1] === 'o' && sixthBomb[i-2] === 'm' && sixthBomb[i-3] === 'b') {
      sixthIndex = i // found it!
    } 
  }
}


sixthBomb = sixthBomb.slice(0, sixthIndex-4) + sixthBomb.slice(sixthIndex+1)

// ---------------------------------------------------//


/* ------ SEVENTH BOMB ----- */

// Arrays and Strings are old news for the mastermind...
// They've turned their attention to Objects.  Remove the bomb from the object!

let seventhBomb = { hidden: 'bomb' }

//  ---------- Code goes below this line ------------ //

// remove the entire key should do the trick!
delete seventhBomb.hidden

// ---------------------------------------------------//


/* ------ EIGHTH BOMB ----- */


let eighthBomb = specialBomb()

// The eighth bomb is an object { }.  But you dont know which
// key holds the bomb.  How can you find the hidden key and remove it?

//  ---------- Code goes below this line ------------ //

// We dont know the key, so lets loop over all the keys to find the value and then delete it!
//  To get the keys we can use Object.keys()
let keys = Object.keys(eighthBomb)
for (let i = 0; i < keys.length; i++) {
  // the currentKey is keys[i]
  // use bracket notation for objects
  if (eighthBomb[keys[i]] === 'bomb') {
    delete eighthBomb[keys[i]]
  }
}



// ---------------------------------------------------//

/* ------ BONUS CONTENT ----- */
/* ------ NINTH BOMB ----- */

// This is a 2D array (An Array of Arrays).
//  The bomb is not only inside the main array, but barried within an inner array

// This one comes with a note from the mastermind: 
// "Find the bomb and remove it - if you can "MUAHAHAHAH"

let ninthBomb = [ 
  ['dud', 'dud', true],
  [42, 'dud', 'dud'],
  ['dud', 'bomb', false],
  ['dud', 'dud', {}]
]

//  ---------- Code goes below this line ------------ //

let row, col // used to find the bomb

for (let i = 0; i < ninthBomb.length; i++) {
  for (let j = 0; j < ninthBomb[i].length; j++) {
    if (ninthBomb[i][j] === 'bomb') {
      row = i
      col = j
    }
  }
}



ninthBomb[row].splice(col, 1) // remove bomb from row


// ---------------------------------------------------//

/* ------ TENTH BOMB ----- */

// This is the last bomb(s). That's right! there are more than one again!
// Use everything you have at your disposal
//  Once this bomb is cleaned up, you will have thwarted the mastermind
//  and saved the day!

let tenthBomb = [ 
  { 
    name: 'Travis', 
    favoriteThings: [ 42, 'videogames', { secret: 'bomb'}] 
  },  
  { 
    name: 'Austin', 
    coding: { 
      years: 4,
      languages: ['javascript', 'python', 'bomb']
    },
    taxes: 'paid'
  }, 
  { 
    name: 'Elissa',
    score: '10/10',
    secretPassword: 1234,
    hiddenStash: {
      bomb: 'Tic-Tock....',
      candy: ['Skittles', 'M&M', 'Hot Tomales']
    }
  }
]

// Take care to remove all of the bombs above (there are 3 of them)

//  ---------- Code goes below this line ------------ //

let travis = tenthBomb[0]
let austin = tenthBomb[1]
let elissa = tenthBomb[2]

delete travis.favoriteThings[2].secret
austin.coding.languages.pop() // remove the bomb from the end
delete elissa.hiddenStash.bomb


// ---------------------------------------------------//

/* ===============================
THIS LAST PIECE OF CODE WILL VERIFY 
THAT THE BOMBS HAVE ALL BEEN DEFUSED
YOU DO NOT NEED TO CHANGE ANY OF THE CODE BELOW 
===================================*/

let firstDefused = firstBomb.indexOf('bomb') < 0
let seconDefused = secondBomb.indexOf('bomb') < 0
let thirdDefused = thirdAndFourthBombs.filter(e=> e ==='bomb').length === 0
let fifthDefused = fifthBomb.split("bomb")[0] === fifthBomb
let sixthDefused = sixthBomb.split("bmob")[0] === sixthBomb
let seventhDefused = !seventhBomb.hidden
let eighthDefused = Object.values(eighthBomb).filter(e=> e==='bomb').length ===0
let ninthDefused = !ninthBomb.map(row => row.filter(e=> e==='bomb').length).filter(e => e===1).length
let tenthDefused = !tenthBomb[0].favoriteThings[2].secret && tenthBomb[1].coding.languages.indexOf('bomb') < 0 && !Object.keys(tenthBomb[2].hiddenStash).includes('bomb')
function specialBomb(){ return { lockerNumber: 12345, secret1234: 'bomb', falseKey: 'dud'}}

function logger(bombs) {
  let done = true;
  for (let i = 0; i < bombs.length;i++) {
    if (!bombs[i]) {
      done = false
    }
    if (i == 2) {
      console.log('Bombs #3 & #4 Defused?', bombs[i])
    }
    else {
      console.log(`Bomb #${i > 2? i+2: i+1} Defused? `, bombs[i])
    }
  }

  if (done) {
    console.log('\nCONGRATULATIONS!!! ALL THE BOMBS ARE DISABLED!\nTHANKS FOR YOUR HELP!')
  }
}

logger([firstDefused, seconDefused, thirdDefused, fifthDefused, sixthDefused, seventhDefused, eighthDefused, ninthDefused, tenthDefused])