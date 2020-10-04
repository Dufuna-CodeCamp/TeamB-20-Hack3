let businessDetailform = document.querySelector(".businessDetails"),
    businessname = document.getElementById("businessname"),
    businessline = document.getElementById("businessline"),
    phoneNumber = document.getElementById('number'),
    email = document.getElementById('email'),
    physicalAddress = document.getElementById('address')
;

function nameValidation(name, event, error) {
    let nameRegex = /^[a-z]+$/i;
    if(name.value === '') {
        name.nextElementSibling.innerHTML = "This field is required";
        event.preventDefault();
        return false;
    } else if(!name.value.match(nameRegex)) {
        name.nextElementSibling.innerHTML = error;
        event.preventDefault();
        return false;
    } else {
        name.nextElementSibling.innerHTML = "";
        return true;
    }
}

function fieldValidation(event, field, fieldRegex, error1, error2) {
    if(field.value === '') {
        field.nextElementSibling.innerHTML = error1;
        event.preventDefault();
    } else if (!field.value.match(fieldRegex)) {
        field.nextElementSibling.innerHTML = error2;
        event.preventDefault();
        return false;
    } else {
        field.nextElementSibling.innerHTML = "";
        return true;
    }
}

function addressValidation(event) {
    if (physicalAddress.value === '') {
        physicalAddress.nextElementSibling.innerHTML = "Please enter your Physical Address";
        event.preventDefault();
        return false;
    } else {
        physicalAddress.nextElementSibling.innerHTML = "";
    }
}

function businessDetails(e) {
    const phoneNumberRegex = /^[\+]?[0-9]{10,14}$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

    nameValidation(businessname, e, "Please enter your Business Name");
    nameValidation(businessline, e, "Please enter your Business Line");
    fieldValidation(e, email, emailRegex, "This field is required", "Please enter a valid Email");
    fieldValidation(e, phoneNumber, phoneNumberRegex, "This field is required", "Please enter a valid Phone Number");
    addressValidation(e);
    return true;
}

businessDetailform.addEventListener("submit", businessDetails);
