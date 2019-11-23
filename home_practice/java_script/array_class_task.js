var arr,sum=0,input,c;
// arr=[1,2,3,4,5,6,7,1,9,10,11,2,5,14,15,16];
arr=[];
c=0;
while(input!='#')
{
    input=prompt("Enter a number for the array/ to stop input #");
    if(input!='#')
    {
        arr[c]=parseInt(input);
        c++;
    }
    
}
document.write(arr+"<br>")
for(i=0;i<arr.length;i++)
// arr.forEach(el=>{sum=sum+el}); // for each
{
    sum=sum+arr[i];
}
document.write("Sum-->" + sum + "<br>"); // Q1
document.write("Average -->" + (sum/arr.length) + "<br>"); // Q2

for(i=0;i<arr.length;i++)
{
    if(arr.indexOf(arr[i])===arr.lastIndexOf(arr[i]))
    {

        document.write("The first non repetative number is " + arr[i] +"<br>") //Q3
        break;
    }
    
}

document.write("Even index values of the array are <br>");//Q4
for(i=1;i<arr.length;i+=2)
{
    document.write(arr[i] + "<br>");
}

document.write("Even values of the array are <br>");
for(i=0;i<arr.length;i++)
{
    if(arr[i]%2==0)
    document.write(arr[i]+"<br>");
}

