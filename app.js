//console.log("hello world");

// JS VARIABLES AND VALUES (var, let and const)
//let x = 2;
//x = 9
//const y = 4;
//console.log(x);
//console.log(y);
// var stands for variable
// conventions and rules in naming variable
// have a logical variable name
// compound names - camelcasing
//const lastName = 'funsho'
// ypu cant start with numbers, but you can start with dollar sign
//const $year = 2003

//const country = "nigeria";
//let state = "lagos";

//console.log(country);
//console.log(state);

//state = "niger state"
//console.log(state);
 
// js data types - (primitive, complex)
// under primitive we have:
// strings - text-quotes-strings
const firstName = "john"
const lastName = "doe"
const middleName = "owen"
const currentJob = "product manager"
const email = "oladipupofunsho99@gmail.com"

// string concatenation - joining of strings
const fullName = firstName +" "+ middleName +" "+ lastName;
console.log(fullName);

// my name is john and i work as a product manager
const description = "my name is " + firstName + " i work as a " + currentJob;
console.log(description);

// you can message on this email, funsh@99.com
const explanation = "you can message on this " + email;
console.log(explanation);
 
//getting characters
console.log(middleName[1]);
console.log(firstName[2]);
console.log(currentJob[8]);

//string length
console.log(firstName.length);
console.log(description.length);

//string method
// transform-

console.log(fullName.toUpperCase());
console.log(fullName.toLowerCase());

//extracting parts of a string- slice substring
const email2= "oladipupofunsho99@gmail.com"
//string.slice[0.7]
console.log(email2.slice(0, 7));
console.log(email2.slice(5, 12));
console.log(email2.slice(-5, -1));
console.log(email2.substring(0, 8));

//string.substring( start, count of characters)
console.log(email2.substr(0, 12));

//replace string content-replace replaceAll
console.log(email2.replace("a", "$"));
console.log(email2.replaceAll("a", "s"));

//includes, indexof, lastindexof, trim , concat, trimstart, trimend,
// startwith, Endswith
console.log(email2.includes('funsho'));
console.log(email2.indexOf("o"));
console.log(email2.lastIndexOf("o"));

const user="    mubarak   "
const password = "   456  "
console.log(user.length, password.length);

const formattedUser = user.trim();
const formattedPassword = password.trim();

console.log(formattedUser.length);
console.log(formattedPassword.length);

console.log(email2.startsWith("o"));
console.log(email2.endsWith(".com"));
 
const job = "Frontend";
console.log(job.concat(" ","Developer"));


const author = "chinua Achebe";
const book = "Things fall apart";
const year = 1996;

const full="the book "+ book + " was written by "+ author+ "in the year "+ year      
console.log(full);

// template literals
const full2 = `The book ${book} was written by ${author} in the year${year}`
console.log(full2);

const fav = `My Favorite author is ${author}`;
console.log(`my full name is ${fullName}`);

// numbers- 5 6.3 45000
const ye = 2003
// boolean- true and false
// null
// undefined
