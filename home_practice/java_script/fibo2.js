var f=0;
var s=1;
var t=0; 
document.write("<h2> Fibonacci numbers are </h2><br>");

while(f<=100)
{
    document.write("  " + f + " ,");
    t=f+s;
    f=s;
    s=t;
}