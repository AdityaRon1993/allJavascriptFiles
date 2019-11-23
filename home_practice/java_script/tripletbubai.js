var n=[5,1,3,4,7];
// n=n.sort();
var sum=12,checksum=0;
var c=0;
console.log(n);
for(i=0 ; i< n.length-2; i++)
{
    for(j=i+1;j< n.length ;j++)
    {
        for(k=j+1;k<n.length;k++)
        {
            console.log("{" + n[i] +"," + n[j] + "," + n[k] + "}");
            checksum=n[i]+n[j]+n[k];
            if(checksum < sum)
            {
                c++;
            }
        }
    }
    console.log(",");
}
// console.log("no. of tiplets -->"+c);