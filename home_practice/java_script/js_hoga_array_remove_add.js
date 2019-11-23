arr=[1,2,3,4,5,6,7,8,9,10];
Array.prototype.add=function(position,element){
    return this.splice(position,0,element);
}
Array.prototype.delete=function(position){
    return this.splice(position,1);
}
arr.add(3,45);
console.log(arr);
arr.delete(6);
console.log(arr);