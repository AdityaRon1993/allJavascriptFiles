var s=1;
var t=0; 
document.write("<h2> Fibonacci numbers are </h2><br>");

for(var f=0;f<=100;s=t)
{
    document.write("  " + f + " ,");
    t=f+s;
    f=s;
    
}