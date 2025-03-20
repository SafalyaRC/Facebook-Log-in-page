let age=20;
let name="Safalya RC";
console.log(age);
console.log(typeof name);

// variables are either primitive: number,string,boolean,undefined,null,bigint,symbol or non-primitive like objects

//using objects (usually declared using const) and present in key:value pairs

const student={
    name:"Safalya Roy Chowdhury",
    age:21,
    hasGraduated:true,
    cgpa:8.5,
};

console.log(student);
console.log("To target value of a specific key we can use: "+student.cgpa); // can alternatively use student["cgpa"] with "" since not a variable 
console.log(typeof student);