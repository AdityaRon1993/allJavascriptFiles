var arr=['cat', 'dog', 'banana', 'nana','walk','walker','dogwalker'];
var arr2=[...arr];

var c=0;
var arr3=[];
var longest = arr.reduce(function (a, b) { return a.length > b.length ? a : b; });
// var index=arr.indexOf(longest);
for(i=0;i<arr2.length;i++)
{
    for(j=i;j<arr2.length;j++)
    {
        if(i!=j)
        {
            if(arr[j].indexOf(arr2[i])>-1)
            {
                arr3[c]=arr2[j];
                arr2[j]="";
                c++;
            }
        }
    }
}
arr3=[...new Set(arr3)]
console.log("array "+arr3);
console.log("array--->"+arr)
for(i=0;i<arr3.length;i++)
{
    for(j=0;j<arr2.length;j++)
    {
        if(arr3[i].indexOf(arr2[j])>-1)
        {
            arr3[i]=arr3[i].replace(arr[j],"");
        }
    }

    
}
console.log("replace "+arr3);