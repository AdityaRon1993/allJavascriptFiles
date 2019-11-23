var a="This is JavaScript class";
b=a.split(' ');

// c=0;
// d="";
// for(i=0;i<b.length;i++)
// {

//     if(b[i].length>c)
//     {
//         c=b[i].length;
//         d=b[i];
//         console.log(c);
//     }
// }
// console.log( c+"  "+d);

b.sort((a,b)=>a.length - b.length)
console.log(b);
console.log(b[b.length-1].length + " " +b[b.length-1]);

