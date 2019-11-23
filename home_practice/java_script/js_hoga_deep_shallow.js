let arr=[1,2,3,4,5,6,7,8,9,10,11,12];
let shallow_copy=arr;
let deep_copy1=[...arr];
let deep_copy2=arr.filter((a)=>true);

let deep_copy4=arr.slice(0);
let deep_copy5=arr.map((a)=>a);
arr[3]=100;
console.log(`Shallow copy ==> ${shallow_copy}`);
console.log(`deep copy-1 ==> ${deep_copy1}`);
console.log(`deep copy-2 ==> ${deep_copy2}`);

console.log(`deep copy-4 ==> ${deep_copy4}`);
console.log(`deep copy-5 ==> ${deep_copy5}`);