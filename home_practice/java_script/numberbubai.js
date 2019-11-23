var n=17;

var number=[1,2,3,4,5];
// if(n>5){
//     n2=n-5;
// }
n2=n;
var a=0; var b=0;
for(i=1;i<=n2;i++){
    // console.log("before "+a);
if(b==0 & i!=1 )
a++;
else
if(b==1)
a--;

if(a==0 && i!=1)
{ b=0;}
else
if(a==4)
{
b=1;

}
// console.log("after "+a);
// console.log("");
}
console.log(number[a]);