let businessOwnerform = document.querySelector(".businessOwner"),
    firstName = document.getElementById('firstname'),
    lastName = document.getElementById('lastname'),
    email = document.getElementById('email'),
    gender = document.getElementById('gender'),
    phoneNumber = document.getElementById('number'),
    homeAddress = document.getElementById('address'),
    nextOfkin = document.getElementById('kin')
    
;

function nameValidation(name, event, error) {
    let nameRegex = /^([a-zA-Z0-9]+|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{1,}|[a-zA-Z0-9]+\s{1}[a-zA-Z0-9]{3,}\s{1}[a-zA-Z0-9]{1,})$/;
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

function homeValidation(event) {
    if (homeAddress.value === '') {
        homeAddress.nextElementSibling.innerHTML = "Please enter your Home Address";
        event.preventDefault();
        return false;
    } else {
        homeAddress.nextElementSibling.innerHTML = "";
    }
}

function businessOwner(e) {
    const phoneNumberRegex = /^[\+]?[0-9]{10,14}$/i;
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,6})+$/;

    nameValidation(firstName, e, "Please enter your First Name");
    nameValidation(lastName, e, "Please enter your Last Name");
    nameValidation(nextOfkin, e, "Please enter the name of Next Of Kin");
    fieldValidation(e, email, emailRegex, "This field is required", "Please enter a valid Email");
    fieldValidation(e, phoneNumber, phoneNumberRegex, "This field is required", "Please enter a valid Phone Number");
    homeValidation(e);
    return true;
}

businessOwnerform.addEventListener("submit", businessOwner);

