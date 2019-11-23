// array=[
//     [1,2,3,4,5,6],
//     [7,8,4,5,1,8,9,10],
//     [1,2,5,89,5,7,8,2,3],
//     [14,2,5,89,74,1,3,5]
// ]
arr1=[1,2,3,4,5,6,89];
arr2=[7,8,4,5,1,8,9,10,3,89];
arr3=[1,2,5,89,5,7,8,2,3];
arr4=[14,2,5,89,74,1,3,5];
arr5=[12,45,8,3,1,5,25,89,14];
arr6=[1,5,9,89,2,3,5,7,1,4,36,58,3]
//array=[arr1,arr2,arr3,arr4,arr5,arr6];
common2=[];
var common=array[0];
for(i=1;i<array.length;i++)
{
    common=array[i].filter((a)=>common.indexOf(a)>-1);

}
common.forEach(f1);
function f1(ele)
{
    if(common2.indexOf(ele)==-1)
    common2.push(ele);
}
console.log(common2.sort((a,b)=>a-b));
























// var array1  = [1, 2, 3, 4, 5, 6],
// array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9]
// console.log(common); // returns [1, 2, 3, 4, 5, 6];







// array3 = array2.filter((a)=>array1.indexOf(a)>-1);
// console.log(array3);



// var array3 = array2.filter(function(obj) { return array1.indexOf(obj) == -1; });