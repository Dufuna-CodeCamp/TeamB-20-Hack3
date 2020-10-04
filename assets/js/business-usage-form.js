let submitForm = document.getElementById('fundForm'),
    firstUse = document.getElementById('firstUse'),
    firstUseSummary = document.getElementById('firstUseSummary'),
    secondUse = document.getElementById('secondUse'),
    secondUseSummary = document.getElementById('secondUseSummary'),
    thirdUse = document.getElementById('thirdUse'),
    thirdUseSummary = document.getElementById('thirdUseSummary'),
    ForthUse = document.getElementById('ForthUse'),
    ForthUseSummary = document.getElementById('ForthUseSummary'),
    FirthUse = document.getElementById('FirthUse'),
    FirthUseSummary = document.getElementById('FirthUseSummary'),
    sixthUse = document.getElementById('sixthUse'),
    sixthUseUseSummary = document.getElementById('sixthUseUseSummary')
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
    required(firstUse, e);
    required (firstUseSummary, e);
    required (secondUse, e);
    required (secondUseSummary, e);
    required (thirdUse, e);
    required (thirdUseSummary, e);
    required (ForthUse ,e);
    required (ForthUseSummary, e);
    required (FirthUse, e);
    required (FirthUseSummary, e);
    required (sixthUse, e);
    required (sixthUseUseSummary, e);
    return true;
}
submitForm.addEventListener("submit",fundForm);
