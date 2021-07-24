console.log('salCal sourced');

$(document).ready(onReady);

function onReady(){  //When Document is ready do...
    console.log('so ready');

$('#form').on('#form', onSubmit);

}

// function to produce  VAL??

function onSubmit(event){

event.preventDefault();
   //grab Values from form
let employeeData={
    firstName:$(`#firstName`).val(),
    lastName:$(`#lastName`).val(),
    id:$(`#id`).val(),
    jobTitle:$(`#jobTitle`).val(),
    annualSalary:$(`#annualSalary`).val(),
}

$(`#table`).append(`

    <tr>
        <td>${employeeData.firstName}</td>
        <td>${employeeData.lastName}</td>
        <td>${employeeData.id}</td>
        <td>${employeeData.jobTitle}</td>
        <td>${employeeData.annualSalary}</td>

    </tr>
   
`);
   


}

    




//Possibly us for on Submit
//console.log('Test');
//    let returnValues = $(`#firstName`).val();
 //   $('tr').append(`<td>${returnValues}</td>`);

 //focus on name input
 //$(`#nameInput`.focus();

