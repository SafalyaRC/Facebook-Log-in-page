// for-loop in js to print sum of first 5 numbers:
let sum=0;
for(let i=1;i<=5;i++)
{
    sum+=i;
}
console.log("\nSum of first 5 numbers using for loop: ",sum,"\n");

// loop iterators: for-of and for-in loops

//for-of loops are generally used to iterate over strings/arrays

let name="Safalya";
for(let char of name)
{
    console.log(char);
}

//for-in loops are generally used to iterate over objects

let student={
    name:"Safalya Roy Chowdhury",
    age:21,
    hasGraduated:true,
    cgpa:8.5,
};

for(let key in student)
{
    if(key==="age") console.log("\n Age of student: "+student[key]); // no "key" as key is being treated as a variable when iterating
}

// Strings in JS:-
let fruit="apple";
console.log("\nlength of string is: "+fruit.length);
console.log(`2nd index of string is: ${fruit[2]}`);

//template literals in JS start with backticks(``) and can print variables/expressions using placeholders like ${var/expression}:-
console.log(`\n Student's name is ${student.name} and has ${student.cgpa} cgpa \n`);

//string functions:-

// strings in JS are immutable whereas arrays aren't

console.log(fruit.toUpperCase()+"\n"); //returns a new string by converting it to Upper Case but doesn't change the original string

let spaceStr="  Safalya  ";
let trimmedStr=spaceStr.trim();   //particulary useful in case of forms
console.log(trimmedStr,"\n");
console.log(trimmedStr.slice(0,3),"\n");  // slice[start,end) where end is optional and slice(start) implies returning from start->str.length
console.log(trimmedStr.replace("a","x"),"\n");  // replaces only the first 'a' with 'x'
console.log(trimmedStr.replaceAll("a","x"),"\n"); //replaces all 'a' with 'x'

