// var s1= ['@','A','#','B','c'];
var s1= 'hfa@A#Bc';
var sf="";
// var sf=[...s1]
var c;
var a=0;

for(i=s1.length-1;i>=0;i--){
   if((s1.charCodeAt(i) > 64 && s1.charCodeAt(i) < 91)  || (s1.charCodeAt(i) > 96 && s1.charCodeAt(i) < 123))
   {
      // console.log("s"+s1[i]);
      while(!((s1.charCodeAt(a) > 64 && s1.charCodeAt(a) < 91)  || (s1.charCodeAt(a) > 96 && s1.charCodeAt(a) < 123)))
      {
         a++;
         // console.log("a"+a);         
      }
      // console.log("sr "+s1[a]);
      sf=s1[a]+""+sf;
      a++;
      // document.write(sf[i]+"<br>");
      // console.log("a"+a);
      
   }
   else{
      sf=s1[i]+""+sf;
      // sf[i]=s1[i];
      // document.write(sf[i]+"<br>");
      // continue;
   }
}
document.write(s1+"<br>");
document.write(sf+"<br>");