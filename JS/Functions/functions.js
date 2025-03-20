// functions in js

function sum(a,b){
    return a+b;
}
console.log(sum(3,4));

// arrow functions are more compact, used in modern JS, which simply works in accordance to parameters provided and they are stored inside variables for their usage

const product= (a,b)=>{
    return a*b;
};

console.log(`product using arrow function: ${product(3,4)}`);

const voidFunction=()=>{
    console.log("\nvoid arrow function\n");
}
voidFunction();

// functions in JS can be passed as arguments to other functions and they're referred to as callback functions

// for-each functions(only for arrays) in JS are used with a context of each callback functions that can use three parameters: value,index and the array itself with value being mandatory inform of arrow function and other two being optional. for-each functions call functions for every elements in the array.

array=["nyc","london","paris"];
array.forEach((val,index) => {
    console.log(`index ${index} has value ${val.toUpperCase()}`);
});

// map functions are similar to that of for-each functions except that they return a new array and for-each computes the required work for us.

nums=[1,2,3];
const squareArr= nums.map((val)=>{
    return val*val;
});
console.log(squareArr);

