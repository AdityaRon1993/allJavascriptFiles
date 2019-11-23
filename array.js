var a= [1,2,3];
var b = [3,2,6,7];
var c = [5,2,4,7,8,9];
var d = [91,4,7,2,3];

a.forEach((element)=>(b.some((ele1)=>element===ele1))&&c.some((ele2)=>element===ele2))&&d.some((ele2)=>element===ele2))