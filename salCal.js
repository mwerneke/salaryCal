console.log('salCal sourced');

let salaryArray =[];

$(document).ready(onReady);

function onReady(){  //When Document is ready do...
    console.log('so ready');

$('#form').on('submit', onSubmit);
$(`.removeBtn`).on(`click`, `#employeeTable`, deleteItem());


}
function deleteItem() {
    console.log( 'in the deleteItem', $(this).parent());
    $(this).parent().remove();
    
    
}
// function to produce  VAL??

function onSubmit(event){

    console.log('this is', this);

    console.log('event',event);

    event.preventDefault();

    console.log('onSubmit');
   
    //grab Values from form

    let salary = getSalFromDom();  //Create a getSalFrom Dom Function

    salaryArray.push(salary)  

    let totalSalary = calculateMonthlySal(); // Creat calculate Monthly Sal function
 
    function getSalFromDom(){
    let salary={
        annualSalary:$(`#annualSalary`).val(),
    }
    return salary;

}
//Calculates Monthly Salary and if greater than 20000, applies bckgrd
function calculateMonthlySal(){
    let monthlySal= 0;
    for(let employeeData of salaryArray){
        monthlySal += Number(employeeData.annualSalary/12); /// Not working
        if(monthlySal > 20000){
            $("#Total").css("background-color", "red");
        }
    }
    return monthlySal;
}


// Employee Data Object
let employeeData={
    firstName:$(`#firstName`).val(),
    lastName:$(`#lastName`).val(),
    id:$(`#id`).val(),
    jobTitle:$(`#jobTitle`).val(),
    annualSalary:$(`#annualSalary`).val(),
    
}
//Clearing out form fields
$(`#firstName`).val("").focus();
$(`#lastName`).val("");
$(`#id`).val("");
$(`#jobTitle`).val("");
$(`#annualSalary`).val("");


//appending the table of objects to DOM
$(`#employeeTable`).append(` 

    <tr>
        <td>${employeeData.firstName}</td>
        <td>${employeeData.lastName}</td>
        <td>${employeeData.id}</td>
        <td>${employeeData.jobTitle}</td>
        <td>${employeeData.annualSalary}</td>
        <td><button class= "removeBtn">Remove Employee</td>
       

    </tr>
   
`);



$(`#Total`).text(totalSalary.toFixed(2));


 

}



