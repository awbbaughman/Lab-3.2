// QUESTION 1 --- I just need to play with this a bit to understand it more.

// my initial varied attempts here:

// let city = "los angeles";

// function ucFirstLetters(){
//     return city.charAt(0, 4).toUpperCase() + city.slice(1);
// }

// console.log(ucFirstLetters("los angeles") ) //Los Angeles

function ucFirstLetters(str) { 
    let newString = ''; 
    let words = str.split(' '); 
    for (let word of words) { 
    if (newString.length != 0) newString += ' ' 
    newString += word.charAt(0).toUpperCase() + word.substring(1) 
    } 
    return newString; 
    } 
    console.log(ucFirstLetters("los angeles") ) 
    console.log(ucFirstLetters("nutbush city limits") ) 
    console.log(ucFirstLetters("auckland") )
  

// QUESTION 2


 console.log(truncate('This text will be truncated if it is too long', 25))
 // This text will be truncat...
  // a)
 function truncate(str, max) {
     if (str.length > max)
     {
             return str.substring(0, max) + '...';
     }
     else {
         return str;
     }
 }

// b)

 function truncate2(str, max) {
     return (str.length > max) ? str.substring(0, max) + '...' : str;
 }
 console.log(truncate('This text will be truncated if it is too long', 25))


// QUESTION 3 // I feel relatively comfortable with arrays, so this exercise felt better than others.


 const animals = ['Tiger', 'Giraffe']
 console.log(animals)

 animals.push('Hippopotamus');
 animals.push('Rhinocerous');
 console.log(animals)

animals.unshift('Penguin');
 animals.unshift('Lion');
 console.log(animals)

animals.sort()
 console.log(animals)

 function replaceMiddleAnimal(newValue) {
     let halfway = animals.length / 2;
     animals[halfway] = new Value;
 }

 console.log(animals)
 function findMatchingAnimals(beginsWith) {
     return animals.filter(animal =>
         animal.toLowerCase().startsWith(beginsWith.toLowerCase()))
 }

console.log(findMatchingAnimals('l'))



// QUESTION 4 -- I definitely struggled here. Seeing it written out mostly makes sense; I just struggle to visualize it from the very beginning on my own.

/* my initial work:

function hyphenToCamelCase(name){
     var split = name.split("-");
     var output = "";
     for(var i = 0; i < split.length; i++)
         {
             if (i > 0 && split[i].length > 0 && !(i == 1 && split[i] == "ms"))
            {
                split[i] = split[i].substr(0, 1).toUpperCase() + split[i].substr(1);
            }
            output += split[i];
        }
         return output;
 }


 console.log(camelCase('margin-left')) // marginLeft
 console.log(camelCase('background-image')) // backgroundImage
 console.log(camelCase('display')) // display
 */

 // Answers:
 function camelCase(cssProp) { 
    let words = cssProp.split('-'); 
    let camelString = '';
    words.forEach(word => { 
    if (camelString.length == 0) { 
    //don't capitalize the first word 
    camelString = word; 
    } 
    else { 
    camelString += word.charAt(0).toUpperCase() + word.substring(1) 
    } 
    }); 
    return camelString; 
    } 
    const camelCase2 = (cssProp) => { 
    let camelString = ''; 
    for (let word of cssProp.split('-')) {  
    camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() +  word.substring(1); 
    } 
    return camelString; 
    } 
    console.log(camelCase('margin-left')) // marginLeft 
    console.log(camelCase2('background-image')) // backgroundImage 
    console.log(camelCase('display')) // display 




// QUESTION 5

let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

// a) Doesn't work because fixedTwenty and fixedTen treats 0.20 and 0.10 as strings, concatenating them as strings --not numbers 

// b) // I generally understand the presentation and definition of data here; I don't really get why we need to multiply by 100 here, or the relevance of "float". Can't seem to find it in powerpoint either.
function currencyAddition(float1, float2){
    let number1 = float1 * 100;
    let number2 = float2 * 100;
    return (number1 + number2) / 100;
}

// c)

function currencyOperation(float1, float2, operation) {
    let number1 = float1 * 100;
    let number2 = float2 * 100;
    let result = 0;

    switch (operation) { //directly copied from answers. I wouldn't have gotten it myself
        case '+' :  
        wholeResult = wholeNumber1 + wholeNumber2; break; 
        case '*' : 
        wholeResult = wholeNumber1 * wholeNumber2; break; 
        case '-' : 
        wholeResult = wholeNumber1 - wholeNumber2; break; 
        case '/' : //now round off any remaining decimals and divide by the same factor you multiplied by return Math.round(wholeResult) / factor; 
} 
        wholeResult = wholeNumber1 / wholeNumber2; break; 
        default : 
        wholeResult = wholeNumber1 + wholeNumber2; 
}



// d)

function currencyOperation2(float1, float2, operation, numDecimals) { let factor = 10**numDecimals; //exponential. for numDecimals=2, would be 10 to the  power of 2, or 10*10 
let wholeNumber1 = float1 * factor; 
let wholeNumber2 = float2 * factor; 
let wholeResult = 0; 
switch (operation) { 
case '+' :  
wholeResult = wholeNumber1 + wholeNumber2; break; 
case '*' : 
wholeResult = wholeNumber1 * wholeNumber2; break; 
case '-' : 
wholeResult = wholeNumber1 - wholeNumber2; break; 
case '/' : 
wholeResult = wholeNumber1 / wholeNumber2; break; 
default : 
wholeResult = wholeNumber1 + wholeNumber2; 
}
//now round off any remaining decimals and divide by the same factor you multiplied by
return Math.round(wholeResult) / factor; 




// QUESTION 6


const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const fruits = ['apple', 'orange', 'banana', 'banana', 'grape', 'tomato', 'orange']

function unique(duplicatesArray){
    const uniques = [];
    duplicatesArray.forEach(element => {
        if (!uniques.includes(element)) {// kind of confused at the syntax of ! here; but I understand the push and everything else
            uniques.push(element);
        }
    });
    return uniques
}
console.log(unique(colors)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(fruits))





// QUESTION 7

const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];


// a) 

function getBookTitle(bookId) { 
    let matchingBook = books.find(book => book.id == bookId); 
    return matchingBook.title; 
    } 
    console.log(getBookTitle(2)) 


// b) 


function getOldBooks() {
    return books.filter(book => book.year < 1950)
}

console.log(getOldBooks())


// c) 
/* this was my original here below. as you can see, I'm way overthinking it.
function addGenre() {
    let genres = books.map(book => (...+ genre(classic)))
}
*/


// the answer below makes sense! Again, I was overthinking it, thinking I needed to declare variables etc
function addGenre() { 
    books.map(book => book.genre = 'Classic'); 
    } 
    addGenre(); 
    console.log(books); 


// d) 
/* Below I started writing the function and got a bit lost in it. I understand asking for it to return, but clearly got confused on where to involve the .map piece 

function getTitles(authorInitial) {
    return books.filter( book => books.map(books.author.toUpperCase()))
}
*/


// ANSWER: // I don't understand the use of Lower case here if we are eventually calling uppercase strings (i.e. H or G or A)
function getTitles(authorInitial) { 
return books 
.filter(book => 
book.author.toLowerCase().startsWith(authorInitial.toLowerCase())) .map(book => book.title); 
} 
console.log(getTitles('H')) 



// e) 
 /* my attempt
function latestBook() {
    books.forEach((book, year)) => {}
}

book.year

console.log(`#${index}: ${book}`)
*/


// ANSWER:

function latestBook() { 
    let latestYear = 1900; //a value older than all books 
    books.forEach(book => { 
    if (book.year > latestYear) { 
    latestYear = book.year; // I get lost here! What is this saying?
    } 
    }); 
    return books.find(book => book.year == latestYear); 
    } 
    console.log(latestBook()) 

   

// QUESTION 8
/
const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

// a) and b)

const phoneBookDEF = new Map([
    'David', '1320918923',
    'Ernest', '5559992222;',
    'Frank', '1112223333',
])

// Why do we need array brackets around each entry, unlike my version above?
const phoneBookDEF = new Map([ //set the values to begin with using an array 
['David', '04332277'], 
['Elizabeth', '04776622'], 
['Fred', '04373737'] 
]) 

// c) 

phoneBookABC.set('Caroline','9998887777' )
// d)
/* my crude, incorrect version below

function printPhoneBook(contacts){
    return phoneBookDEF
}
*/

console.log(printPhoneBook)

//ANSWER
function printPhoneBook(contacts) { 
    for (let entry of contacts) { // how does JavaScript know we are referencing "entry" and "contacts" here when neither of those values are specified above?
    console.log(entry) 
    } 
    } 
    printPhoneBook(phoneBookABC)
    

// e)
/* My answer below
const combined = phoneBookABC.concat(phoneBookDEF)
console.log(combined)
*/

 // ANSWER: // How is this correct? Since it doesn't add the phone numbers along with the names?
 const phoneBook = new Map(  
    [...phoneBookABC.entries()].concat([...phoneBookDEF.entries()]) );

// f) 
console.log([...phoneBook.keys()])  // this makes sense
console.log([...phoneBook.keys()].concat([...phoneBook.values()]))  // tried this to get numbers alongside


// QUESTION 9

let salaries = {
    "Timothy" : 35000,
    "David" : 25000,
    "Mary" : 55000,
    "Christina" : 75000,
    "James" : 43000
    };


    // a)
/* where I started before seeing answer and reviewing for/of loops
    function sumSalaries(salaries){
        let totalQty = salaries.values()
        return totalQty       
    }

    */

// ANSWER; this mostly makes sense when reading it; again, I just struggle to assemble it

function sumSalaries(salaries) { 
    let totalSalaries = 0; // why is this zero?
    for (let [name, salary] of Object.entries(salaries)) { 
    totalSalaries += salary; 
    } 
    return totalSalaries; 
}

console.log(sumSalaries(salaries))

/// this doesn't make sense to me. Need review
function topEarner(salaries) { 
    let topSalary = 0; 
    let topEarner = ''; 
    for (let name in salaries) {  
    if (salaries[name] > topSalary) { 
    topSalary = salaries[name]; 
    topEarner = name; 
    } 
    } 
    return topEarner; 
    } 

    console.log(topSalary(salaries) + ' earns the most') // Terminal says "topSalary is not defined". I thought it is defined in the function?


// QUESTION 10

/* my attempt
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours and' + today.getMinutes + ' minutes have passed so far today')
*/


//ANSWERS; I understand how *60 accesses the smaller increment of time, but can we review why we need to set the code up in this way?
const today = new Date();
console.log('Current time is ' + today.toLocaleTimeString())
console.log(today.getHours() + ' hours have passed so far today')
console.log((today.getHours()*60 + today.getMinutes()) + ' minutes have passed today') 
console.log((today.getHours()*60*60 + today.getMinutes()*60 + today.getSeconds()) + '  seconds have passed today')

// c) I somewhat get this, but don't really understand the decrementing of months. Does that just mean it allows terminal to read it as negative X months?

const birthday = new Date('1993-12-13')  
let years = today.getFullYear() - birthday.getFullYear();  
let months = today.getMonth() - birthday.getMonth();  
let days = today.getDate() - birthday.getDate();  
if (days < 0) { 
months--; 
days += birthday.getDate(); 
} 
if (months < 0) { 
    years -= 1; 
    console.log(`I am ${years} years, ${months} months and ${days} days old`) }

    // d)
    function daysInBetween(date1, date2) {  
        let differenceMS = date2 - date1;  
        let millisecondsPerDay = 24 * 60 * 60 * 1000;  
        let differenceDays = Math.floor(differenceMS / millisecondsPerDay); 
        return Math.abs(differenceDays);  
        } 
console.log(`Days between ${birthday.toLocaleDateString()} and  
${today.toLocaleDateString()}: ${daysInBetween(birthday, today)}`) 
// as usual, this console.log above makes sense when reading it-- I just struggle to put it together.
        
console.log(`Days between 2022-01-15 and 2023-01-01: 
${daysInBetween(new Date('2023-01- 01'), new Date('2022-01-15'))}`)