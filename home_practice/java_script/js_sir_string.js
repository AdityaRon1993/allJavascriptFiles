//question 1 
let str='S+a(n₹jay@';
let reg=/[a-zA-z]/g;
// str=str.split(''); //1 //2
// str=str.filter((a)=>((a.charCodeAt(0)>=65 && a.charCodeAt(0)<=90) || (a.charCodeAt(0)>=97 && a.charCodeAt(0)<=122)));
// str=str.filter((a)=>(a>='a'&& a<='z')||(a>='A' && a<='Z'));//1
str=str.match(reg); 
// str=str.map((a)=>a.match(reg)); //2
str=str.join('');
console.log(str);

// question 2 without using nested-loop
let str2='entertainment';
let arr=[[],[]];
str2=str2.split('').sort();
// console.log(str2);
let c=0;
for(index=0;index<str2.length;index++)
{
    if(str2.indexOf(str2[index])!=str2.lastIndexOf(str2[index]))
    {
        arr[c]=str2.slice(str2.indexOf(str2[index]),str2.lastIndexOf(str2[index])+1)
        index=str2.lastIndexOf(str2[index])
        c++;
    }
    else
    {
        arr[c]=str2.slice(str2.indexOf(str2[index]),str2.lastIndexOf(str2[index])+1);
        c++;
    }
}
console.log(arr);
for(index in arr)
{
    document.write('number of '+arr[index][0]+' is '+arr[index].length+'<br>');
}
