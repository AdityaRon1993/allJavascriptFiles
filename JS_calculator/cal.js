var current_number="";
var result=0,c=true; last_operation="";
function f1(a){
    if(a=='')
    {
        current_number="";
        result=0;
        c=true;
        document.querySelector('.area').innerHTML=result;
    }
    else
    {
        current_number=current_number+a;
        document.querySelector('.area').innerHTML=current_number;
    }
       
    
}


function f2(b){

    last_operation=b;
    if(c)
        {
            result=parseFloat(current_number);
            c=false;
            current_number="";
            console.log(result);
        }
    else
    {
        switch (b){
            case 'plus': 
            result=result+parseFloat(current_number);
            current_number="";
            document.querySelector('.area').innerHTML=result;
            console.log(result);
                                    
            current_number="";
            break;
            case 'minus':
            result=result-parseFloat(current_number);
            current_number="";
            document.querySelector('.area').innerHTML=result;
            console.log(result);
            break;
            case 'multiply':
            result=result*parseFloat(current_number);
            current_number="";
            document.querySelector('.area').innerHTML=result;
            console.log(result);
            break;
            case 'divide':
            result=result/parseFloat(current_number);
            current_number="";
            document.querySelector('.area').innerHTML=result;
            console.log(result);
            break;



           
        }
    }
    
}

function f3()
{
    f2(last_operation);
    document.querySelector('.area').innerHTML=result;
    
    last_operation="rep";
}


