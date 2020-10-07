let submitForm = document.getElementById('fundForm'),
    firstAmount = document.getElementById('firstAmount'),
    firstBreakdown = document.getElementById('firstBreakdown'),
    secondAmount = document.getElementById('secondAmount'),
    secondBreakdown = document.getElementById('secondBreakdown'),
    thirdAmount = document.getElementById('thirdAmount'),
    thirdBreakdown = document.getElementById('thirdBreakdown'),
    forthAmount = document.getElementById('forthAmount'),
    forthBreakdown = document.getElementById('forthBreakdown'),
    firthAmount = document.getElementById('firthAmount'),
    firthBreakdown = document.getElementById('firthBreakdown'),
    sixAmount = document.getElementById('sixAmount'),
    sixthBreakdown = document.getElementById('sixthBreakdown')
;

function required(field, event) {
    if(field.value === '') {
        field.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function amount(input, event) {
    let inputRegex = /^(\$|)([1-9]\d{0,2}(\,\d{3})*|([1-9]\d*))(\.\d{2})?$/;
    
    if(input.value === '') {
        input.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if(!input.value.match(inputRegex)) {
        input.nextElementSibling.innerHTML = "Please enter your Amount";
        event.preventDefault();
        return false;
    } else {
        input.nextElementSibling.innerHTML = "";
        return true;
    }  
}

function fundForm(e){
    amount(firstAmount, e);
    required (firstBreakdown, e);
    amount (secondAmount, e);
    required (secondBreakdown, e);
    amount (thirdAmount, e);
    required (thirdBreakdown, e);
    amount (forthAmount, e);
    required (forthBreakdown , e);
    amount (firthAmount, e);
    required (firthBreakdown, e);
    amount (sixAmount, e);
    required (sixthBreakdown, e);
    return true;
}

submitForm.addEventListener("submit", fundForm);
