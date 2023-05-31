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
// const firstName = "john"
// const lastName = "doe"
// const middleName = "owen"
// const currentJob = "product manager"
// const email = "oladipupofunsho99@gmail.com"

// string concatenation - joining of strings
// const fullName = firstName +" "+ middleName +" "+ lastName;
// console.log(fullName);

// my name is john and i work as a product manager
// const description = "my name is " + firstName + " i work as a " + currentJob;
// console.log(description);

// you can message on this email, funsh@99.com
// const explanation = "you can message on this " + email;
// console.log(explanation);
 
//getting characters
// console.log(middleName[1]);
// console.log(firstName[2]);
// console.log(currentJob[8]);

//string length
// console.log(firstName.length);
// console.log(description.length);

//string method
// transform-

// console.log(fullName.toUpperCase());
// console.log(fullName.toLowerCase());

//extracting parts of a string- slice substring
// const email2= "oladipupofunsho99@gmail.com"
//string.slice[0.7]
// console.log(email2.slice(0, 7));
// console.log(email2.slice(5, 12));
// console.log(email2.slice(-5, -1));
// console.log(email2.substring(0, 8));

//string.substring( start, count of characters)
// console.log(email2.substr(0, 12));

//replace string content-replace replaceAll
// console.log(email2.replace("a", "$"));
// console.log(email2.replaceAll("a", "s"));

//includes, indexof, lastindexof, trim , concat, trimstart, trimend,
// startwith, Endswith
// console.log(email2.includes('funsho'));
// console.log(email2.indexOf("o"));
// console.log(email2.lastIndexOf("o"));

// const user="    mubarak   "
// const password = "   456  "
// console.log(user.length, password.length);

// const formattedUser = user.trim();
// const formattedPassword = password.trim();

// console.log(formattedUser.length);
// console.log(formattedPassword.length);

// console.log(email2.startsWith("o"));
// console.log(email2.endsWith(".com"));
 
// const job = "Frontend";
// console.log(job.concat(" ","Developer"));


// const author = "chinua Achebe";
// const book = "Things fall apart";
// const year = 1996;

// const full="the book "+ book + " was written by "+ author+ "in the year "+ year      
// console.log(full);

// template literals
// const full2 = `The book ${book} was written by ${author} in the year${year}`
// console.log(full2);

// const fav = `My Favorite author is ${author}`;
// console.log(`my full name is ${fullName}`);

// numbers- 5 6.3 45000
const ye = 2003
// math operators - + - * / ** %
console.log(6 % 2); //0
console.log(5 % 2); //1

console.log(5 / 2); //2.5

// order of operations - bodmas, pemdas

console.log(6 / 3 + 5);

let balance = 500
const t1 = 20
const t2 = 100
const d1 = 200

let = balance - t1 - t2 + d1;
console.log(let);

console.log(5 + 6 * 2);
 
let total = 50;
//increase the value of total by12
total += 10
console.log(total);

let post = 40;
post += 15;
post -= 15;
post *= 2;
post /= 5;
console.log(post);

let likes = 0;
likes += 1;
likes += 1;
likes += 1;
likes -= 1;
likes++;
likes--;
likes++;
likes--;

console.log(likes)



// boolean- true and false
console.log(true);
console.log(false);

const country = "nigeria";
const continent = "africa";
let population = 8000000;

// console.log(country);
// console.log(continent);
// console.log(population);
console.log(country, continent, population);

const isIsland = false
const language = "english";

population /= 2;
console.log(population);
population += 1;
console.log(population);

const description2=`${country} is in ${continent} and its population of ${population} people speaks ${language}`
console.log(description2);

const description3 = `${country} as a country speaks majorly ${language}`
console.log(description3);

//boolean true or false
// comparison operators - < > <= >= ==
// = assignment
// ==equality , === strict
//comparison operators
console.log(6.7 <= 5.6);
console.log(45 == 4.5);
console.log(6 <= "6.0");


//logical operators and-&&  or-||  not-!
console.log(5 > 6 && 2 == 2);
console.log(6 > 7 || 2 === 2);
console.log((2 > 6 || 5.6 == 67) && 67 > 8)
console.log(5 != 5);



//tyeof


//strings to number
const str = "90"
console.log(typeof str);
const converted = Number(str)
console.log(typeof converted);

// numbers to string
const num = 9000000;
console.log(typeof num);
const converted2 = String(num);
console.log(typeof converted2);

//type coercion
const num1 = 8;
const num2 = 7;
const res = num1 / num2;

console.log(num1 + num2); //87
console.log(typeof res);

// null
// undefined
