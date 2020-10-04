let submitForm = document.getElementById('fundForm'),
    firstAmount = document.getElementById('firstAmount'),
    firstBreakdown = document.getElementById('firstBreakdown'),
    secondAmount = document.getElementById('secondAmount'),
    secondBreakdown = document.getElementById('secondBreakdown'),
    thirdAmount = document.getElementById('thirdAmount'),
    thirdBreakdown = document.getElementById('thirdBreakdown'),
    forthBreakdown = document.getElementById('forthAmount'),
    forthAmount = document.getElementById('forthBreakdown'),
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
function fundForm (e){
    required(firstAmount, e);
    required (firstBreakdown, e);
    required (secondAmount, e);
    required (secondBreakdown, e);
    required (thirdAmount, e);
    required (thirdBreakdown, e);
    required (forthAmount, e);
    required (forthBreakdown , e);
    required (firthAmount, e);
    required (firthBreakdown, e);
    required (sixAmount, e);
    required (sixthBreakdown, e);
    return true;
}
submitForm.addEventListener("submit",fundForm);
