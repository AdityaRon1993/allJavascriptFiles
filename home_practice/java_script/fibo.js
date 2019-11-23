var f=0;
var s=1;
var t=0, c=1;
document.write("<h2> Fibonacci numbers are </h2><br>");

while(c<=5)
{
    document.write("  " + f + " ,");
    c++
    t=f+s;
    f=s;
    s=t;
}