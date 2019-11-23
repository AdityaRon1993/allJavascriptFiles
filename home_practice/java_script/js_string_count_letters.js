let str='entertainment';
let count={};
for(element of str)
{
    count[element]=count[element]?count[element]+1:1;
}
console.log(count);
