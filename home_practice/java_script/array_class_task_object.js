var employees=
[
    {eld:101, name:'deepak', sal:5000},
    {eld:102, name:'ajay', sal:6000},
    {eld:103, name:'ranjan', sal:8000},
    {eld:104, name:'manoj', sal:7000},
]
var sort_sal_employees = employees.sort((a,b)=>a.sal-b.sal);
console.log(sort_sal_employees); //Q1

// ********************** with sort ************************** 

var sort_name_employees = employees.sort((a,b)=>a.name > b.name ? 1 : a.name < b.name ? -1:0);
console.log(sort_name_employees.reverse());

// ********************** without sort (traditional method) ******************************
// for(i in employees)
// {
//     for(j=i;j<employees.length;j++)
//     {
//         if(employees[i].name > employees[j].name)
//         {
//             var a=employees[i];
//             employees[i]=employees[j];
//             employees[j]=a;

//         }
//     }
// }

// console.log(employees); //Q2

var filter_employees_sal= employees.filter((a)=>a.sal>=7000);
console.log(filter_employees_sal); //Q3

employees.map((a)=>a.comp="ibm"); // whole employee is changing
console.log(employees); //Q4

employees.map((a)=>a.sal+=500); // whole employee is changing
console.log(employees); //Q5