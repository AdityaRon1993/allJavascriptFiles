Array.prototype.getSum=function(){
    return this.reduce((sum,element)=> sum+element)
}
numbers=[1,2,3,4,5,6,7,8,9,10];
console.log(numbers.getSum());