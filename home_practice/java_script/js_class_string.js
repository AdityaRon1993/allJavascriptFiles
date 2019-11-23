////////// reverse ////////////
var a="AdityaRon";
var b=(a.split("")).reverse().join("");
console.log(b); //Q1

//////// reverse of word /////////
var w="this is pen";
w=w.trim()
var wr=w.split(" ").reverse().join(" ");
console.log(wr); //Q2
/////// title case /////////////////
var s="i am a student";
s=s.trim().toLowerCase();
var s2=s.split(" ").map((a)=> a.charAt(0).toUpperCase()+a.slice(1)).join(" ");
// var s2=s.split(" ");
// var s3="";
// for(i=0;i<s2.length;i++)
// {
//     s3=s3+s2[i].charAt(0).toUpperCase()+s2[i].slice(1,s2[i].length)+" ";
// }
console.log(s2);
//////////// name ////////////////////
//1
var name="Sachin Ramesh Tendulkar";
name=name.trim();
var name2=name.split(" ");
var abbr="";
for(i=0;i<name2.length-1;i++)
{
    abbr=abbr+name2[i].charAt(0)+".";
}
abbr=abbr+name2[name2.length-1];
console.log(abbr);
//2
a="Sachin Ramesh Tendulkar";
b=a.split(" ");
c=b.map(f1);
function f1(ele,ind){
    if(ind<=1)
    {
        return ele.charAt(0)+"."
    }
    else return ele
}
d=c.join('');
console.log(d);


//////////////// non repetative ///////////
var rev="entertainment";
var c=true;
for(i=0;i<rev.length;i++)
{
    if(rev.indexOf(rev.charAt(i)) == rev.lastIndexOf(rev.charAt(i))){
        console.log("non repetative letters in the string is " + rev.charAt(i));
         c=false;break;
    }
}
if(c)
console.log("No non repetative letters are found");