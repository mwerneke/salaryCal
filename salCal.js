console.log('salCal sourced');



$(document).ready(onReady);

function onReady(){  //When Document is ready do...
    console.log('so ready');

$('#form').on('submit', onSubmit);

}

// function to produce  VAL??

function onSubmit(event){

    console.log('this is', this);

    console.log('event',event);

    event.preventDefault();

    console.log('onSubmit');
   //grab Values from form

let salaryArray =[];

let salary = getSalFromDom();  //Create a getSalFrom Dom Function

salaryArray.push(salary)  

let totalSalary = calculateMonthlySal(); // Creat calculate Monthly Sal function

function getSalFromDom(){
    let salary={
        annualSalary:$(`#annualSalary`).val(),
    }
    return salary;
}
function calculateMonthlySal(){
    let monthlySal= 0;
    for(let employeeData of salaryArray){
        monthlySal += employeeData.annualSalary/12;
    }
    return monthlySal;
}

   
  
let employeeData={
    firstName:$(`#firstName`).val(),
    lastName:$(`#lastName`).val(),
    id:$(`#id`).val(),
    jobTitle:$(`#jobTitle`).val(),
    annualSalary:$(`#annualSalary`).val(),
    
}

$(`#employeeTable`).append(`

    <tr>
        <td>${employeeData.firstName}</td>
        <td>${employeeData.lastName}</td>
        <td>${employeeData.id}</td>
        <td>${employeeData.jobTitle}</td>
        <td>${employeeData.annualSalary}</td>
        <td><button>Remove Employee</td>
       

    </tr>
   
`);

$(`#Total`).append(totalSalary);

}
 




//Possibly us for on Submit
//console.log('Test');
//    let returnValues = $(`#firstName`).val();
 //   $('tr').append(`<td>${returnValues}</td>`);

 //focus on name input
 //$(`#nameInput`.focus();

