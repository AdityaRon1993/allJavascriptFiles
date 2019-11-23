var a=[1,2,3,4,5,1,2,3,7,8,9,10];
var b=[];
for(e of a)
{
    if(b.indexOf(e)==-1)
    b.push(e);
}
console.log(b);