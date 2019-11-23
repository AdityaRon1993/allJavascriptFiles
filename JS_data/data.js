// var input_data;

// document.querySelector('.add').addEventListener('click',f1);
// function f1()
// {
//     input_data=document.querySelectorAll('.data');
//     console.log(input_data);
// }

var input_data;
var new_row;
var new_data; var table;var new_button;
// var row_class=0;

document.querySelector('.add').addEventListener('click',f1);

function f1()
{
    input_data=document.querySelectorAll('.data');
    console.log(input_data);
    table=document.querySelector('.dynamic_table');
    new_row=document.createElement('tr');//<tr></tr>
    // new_row.setAttribute('class','edit_'+row_class);
    // row_class++;
    table.appendChild(new_row);

    for(let i=0;i<input_data.length;i++)
    {
        new_data=document.createElement('td');
        new_data.innerHTML=input_data[i].value;
        new_row.appendChild(new_data);
    }
    new_button=document.createElement('button');
    new_button.innerHTML='DELETE';
    // new_button.setAttribute('value',row_class);
    new_button.style.padding='9px';
    
    new_button.setAttribute('onclick',"del(this)");
    new_row.appendChild(new_button);
    // row_class++;
}

function del(a)
{
    // del_class='edit_' + row_class;
    // del_row=document.querySelector(del_class);
    // table.deleteRow(rowclass);
    table=document.querySelector('.dynamic_table');
    index = a.parentNode.rowIndex;
    table.deleteRow(index-1);
}

