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
// const ye = 2003
// math operators - + - * / ** %
// console.log(6 % 2); //0
// console.log(5 % 2); //1

// console.log(5 / 2); //2.5

// order of operations - bodmas, pemdas

// console.log(6 / 3 + 5);

// let balance = 500
// const t1 = 20
// const t2 = 100
// const d1 = 200

// let = balance - t1 - t2 + d1;
// console.log(let);

// console.log(5 + 6 * 2);
 
// let total = 50;
//increase the value of total by12
// total += 10
// console.log(total);

// let post = 40;
// post += 15;
// post -= 15;
// post *= 2;
// post /= 5;
// console.log(post);

// let likes = 0;
// likes += 1;
// likes += 1;
// likes += 1;
// likes -= 1;
// likes++;
// likes--;
// likes++;
// likes--;

// console.log(likes)



// boolean- true and false
// console.log(true);
// console.log(false);

// const country = "nigeria";
// const continent = "africa";
// let population = 8000000;

// console.log(country);
// console.log(continent);
// console.log(population);
// console.log(country, continent, population);

// const isIsland = false
// const language = "english";

// population /= 2;
// console.log(population);
// population += 1;
// console.log(population);

// const description2=`${country} is in ${continent} and its population of ${population} people speaks ${language}`
// console.log(description2);

// const description3 = `${country} as a country speaks majorly ${language}`
// console.log(description3);

//boolean true or false
// comparison operators - < > <= >= ==
// = assignment
// ==equality , === strict
//comparison operators
// console.log(6.7 <= 5.6);
// console.log(45 == 4.5);
// console.log(6 <= "6.0");


//logical operators and-&&  or-||  not-!
// console.log(5 > 6 && 2 == 2);
// console.log(6 > 7 || 2 === 2);
// console.log((2 > 6 || 5.6 == 67) && 67 > 8)
// console.log(5 != 5);



//tyeof


//strings to number
// const str = "90"
// console.log(typeof str);
// const converted = Number(str)
// console.log(typeof converted);

// // numbers to string
// const num = 9000000;
// console.log(typeof num);
// const converted2 = String(num);
// console.log(typeof converted2);

// //type coercion
// const num1 = 8;
// const num2 = 7;
// const res = num1 / num2;

// console.log(num1 + num2); //87
// console.log(typeof res);

// null
// let age = null;
// console.log(age, age + 4, `my age is ${age}`);
// undefined
// let year;
// console.log(year);
// console.log(year, year + 4, `the year is ${year}`);
// //truthy- from 1 upwards is true
// console.log(boolean("1"));
// falsy values are- 0 null undefined

//control flow
// conditional statement
// if(condition){code}
// const password = "21345656";
// if (password.length > 6) {
//     console.log("your password is strong");
// }
// if (false) {
//     console.log("working");
//}
//if else
//if(condition)
//CODE 1
//}else{
//code 2
//}
//    




// if (password.length > 6) {
//     console.log('your password is strong');
// } else {
//     console.log("your password is weak");
// }
// if ( true && true && true) {
//     console.log("here");
// }

const country = "london";
const continent = "europe";
const population = 29;
const isIsland = false;
const language = "english";

//sarah speaks chinese has less than 50 people and is not an island
// you should leave in portugal
// portugal does not meet your criteria
if (language === "english" && population < 50 && !isIsland) {
    console.log(`you should live in ${country}`);
} else {
    console.log(`${country} does not meet your criteria`);
}

const age = 18;
// >= 18

if (age >= 18) {
    console.log("you are an adult");
} else {
    console.log("you are not one");
}

//if (condition)else if (another condition ) else if (condition){}else()

const password = "dimension@";
// recommemnded >7 and include @, strong > 7 and weak

// if (password.length >= 7 && password.includes("@")) {
//     console.log("your password is recommended");
// } else if (password.length >= 7) {
//     console.log("your password is strong");
// } else {
//     console.log("your password is weak");
// }

//whether a number is positive, negative or zero
// const num1 = 2;

// if (num1 > 0) {
//     console.log("your number is positive");
// } else if (num1 < 0) {
//     console.log("your number is negative");
// } else {
//     console.log("your number is zero");
// }

// const num2 = 5;
// if (num2 % 2 === 0) {
//     console.log("your number is even");
// } else {
//     console.log("your number is odd");
// }

const age2 = 25;
if (age2 < 18) {
    console.log("weclome to the baby section");
} else if (age2 >= 18 && age2 <= 50) {
    console.log("welcome to the club");
} else{
    console.log("welcome to the vip section");
}

// switch statement
// const grade = "D";
// switch (grade) {
//      case "A":
//     case "a":
//         console.log("EXCELLENT");
//         break;
//         case "B":
//     case "b":
//         console.log("VERY GOOD");
//         break;
//         case "C":
//     case "c":
//         console.log("CREDIT");
//         break;
//         case "D":
//     case "d":
//         console.log("FAIR");
//         break;
//         case "E":
//     case "e":
//         console.log("POOR");
//         break;
//         case "F":
//     case "f":
//         console.log("FAIL");
//         break;
//     default:
//         console.log("Not a valid Grade");
// }


const day = 10;
switch (day) {
    case 1:
        console.log("MONDAY");
        break;
     case 2:
        console.log("TUESDAY");
        break;
     case 3:
        console.log("WEDNESDAY");
        break;
     case 4:
        console.log("THURSDAY");
        break;
     case 5:
        console.log("FRIDAY");
        break;
     case 6:
        console.log("SATURDAY");
        break;
     case 7:
        console.log("SUNDAY");
        break;
    default:
        console.log("NOT A VALID DAY");
}

//assignment
//Mark data 1
// let markweight = 78;
// let markheight = 1.69;
// let markbmi = markweight / markheight **2;
// console.log(markbmi);

//data2
//  markweight = 95;
//  markheight= 1.88;
// markbmi = markweight / markheight **2;
// console.log(markbmi);

//john data
// let johnweight = 92;
// let johnheight = 1.95;
// let johnbmi = johnweight / johnheight **2 ;
// console.log(johnbmi);

//data 2
// johnweight = 85;
// johnheight = 1.76;
// johnbmi = johnweight / johnheight **2;
// console.log(johnbmi);

//markhigherBmi
// console.log(markbmi > johnbmi);
// console.log(markbmi < johnbmi);
// markbmi is higher

//test 2
// if (markbmi > johnbmi) {
//     console.log("Mark's BMI is higher than john's!");
// } else {
//     console.log("John's BMI is higher than Mark's");
// }
//template literals
// const output = `Marks BMI ${markbmi.toFixed(2)} is higher than Johns ${johnbmi.toFixed(2)}`
// console.log(output);

// test 3
//dolphins score
// const dscore = 96;
// const dscore2 = 108;
// const dscore3 = 89;
// const totaldscore = (dscore + dscore2 + dscore3) / 3;
// console.log(totaldscore);

// //Koala score
// const kscore = 88;
// const kscore2 = 91;
// const kscore3 = 110;
// const totalkscore = (kscore + kscore2 + kscore3) / 3;
// console.log(totalkscore);

// if (totaldscore > totalkscore) {
//     console.log("dolphin is the winner");
// } else if (totalkscore > totaldscore) {
//     console.log("koalas is the winner");
// } else {
//     console.log("it is a draw");
// }







//ternary operator- condition ? action 1 : action 2

// 15 > 7 ? console.log("yes") : console.log("no");

// const num2 = 46;

// num2 % 2 === 0 ? console.log("This is an even number") : console.log("This is an odd number");




//loops- repetitive tasks - for , while , do.. while loop

// for (initializer let i = 0; condition i < 5; increment i++ ){code}

// for (let i = 0; i < 10; i++) {
//     console.log(`in the loop ${i}`);
// }
// console.log("outside of the loop");


// initializer
// while loop
// let x = 0;
// while (x, 20) {
//     console.log("hello");
//     x++;
// }
// do while
// let y = 50;
// do {
//     console.log("HEY");
//     y++;
// }while(y < 5)

//functions

// function declaration
function myFunction() {
    console.log("hello class");
    console.log("you are welcome");
}
myFunction();

function greet(name = "user" , age = 18) {
    console.log("welcome "+ name + age);
}
greet("john", 76);
greet("sandra", 5);
greet("EMMANUEL", 78);
greet();
greet("ola");

//calculate the age of users
// 2023 - year

function calcage(year) {
    const age = 2023 - year;
    console.log(`your age is ${age}`);
}
calcage(1960);
calcage(2000)

function sumNums(a, b) {
    console.log(`the sum of ${a} and ${b} is ${a + b}`);
}

sumNums(4.5, 78); 
sumNums(-45, 87);


function describeCountry(country, population, capitalcity) {
    console.log(`${country} has ${population} people and its capital city is ${capitalcity}`);
} 
describeCountry("finland", "6million", "helsinki");
describeCountry("nigeria", "10million", "abuja");
describeCountry("england", "15miilion", "london");


//check if an email is valid or not
checkemail("text@gmail.com");

function checkemail(email) {
    if (email.includes("@")) {
        console.log(`${email} is a valid email address`);
    } else {
        console.log(`${email} is not a valid email`);
    }
}
checkemail("abcgoogle.com")
//hoisting
// function expression
const myFunction2 = function (a, b) {
    console.log("Function expression");
    console.log(a + b);
};

myFunction2(7, 8);

// return keyword

const precious = function (a, b) {
    return a * b;
};
precious(9, 6);

const test = precious(10.10);
console.log(test);

// create a function that calcaverage of the two teams
// d - 103, 98 , 89
// k - 110, 87 ,95

const calcAverage = function (a, b, c) {
    const avg = (a + b + c) / 3;
    return Number(avg.toFixed(2))
}

const avgDolphin2 = calcAverage(123, 98, 89);
const avgkoala2 = calcAverage(110, 87, 95);
console.log(avgDolphin2, avgkoala2);

function checkWinner(teamA, teamB) {
    if (teamA > teamB) {
        console.log("First Team won");
    } else if (teamB > teamA) {
        console.log("Second Team won");
    } else {
        console.log("no winner");
    }
}

checkWinner(avgDolphin2, avgkoala2);
//arrays
//object
//asybchronous js
//Dom