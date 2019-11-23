var result=0.0;
var current_number="",make_number="";
// document.querySelector('.number').addEventListener('click',f1);
var number=['one','two','three','four','five','six','seven','eight','nine','zero','decimal'];
var func=['divide','multiply','minus','plus','equal'];
var query_number=[],query_func=[];
for(let i=0;i<number.length;i++)
{
    query_number[i]=document.querySelector('.'+number[i]);    
}
for(let i=0;i<func.length;i++)
{
    query_func[i]=document.querySelector('.'+func[i]);    
}
for(let i=0;i<query_number.length;i++)
{
    query_number[i].addEventListener('click',function(){
        current_number=current_number+""+query_number[i].value;
        console.log(current_number+"hello");
        break;
    })    
}


for(let i=0;i<query_func.length;i++)
{
    query_func[i].addEventListener('click',function(){
        switch(query_func[i].value)
        {
            case 'divide' :
                            break;

            case 'multiply':
                            break;

            case 'plus':    result=result+parseFloat(current_number);
                            console.log(result);
                            break;

            case 'minus':

            case 'equal':
        }
    })    
}


