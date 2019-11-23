var c;
document.write("<h1> Prime numbers from 1 to 100 are </h1><br>")
for(i=2;i<=100;i++)
{
    c=0;
    for(j=2;j<=i/2;j++)
    {
        if(i%j==0)
        {
            c++; 
            break;
        }
    }
    if(c==0)
        document.write(i+"<br>");
}