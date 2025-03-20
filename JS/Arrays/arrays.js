// Arrays in JS is a object where the keys are the indices and values are the array elements:-

// push(x) pushes value into array and modifies the original array and pop(index) returns the element deleted at the index

let nums=[0,1,2,69,4,5,6,7];
nums.push(8,9);
console.log("Original array after pushing: "+ nums);
console.log(nums.pop(3));

let alphabets=["a","b","c"];
console.log(nums.concat(alphabets));

//array.shift(x) will add x to the start of array unlike push that adds to end

//splice(index of element to start deleting from, no. of elements to delete from there, *optional* elements to replace them with) and this will also modify the original array;

nums.splice(2,2,101,102);
console.log(nums);


