var form;
$(document).ready(function () {
    form = new Form($('#firstName'), $('#lastName'), $('#firstNameMandatory'), $('#lastNameMandatory'), $('#email'), $('#emailMandatory'), $('#mediaChannelSelect'), $('#otherMediaChannel'), $('#newsletter'), $('.btn-primary'));
    hideAll(new Array(/*$('#firstNameMandatory'), $('#lastNameMandatory'),*/ form.emailMandatory, form.otherMediaChannel, form.submit));
    form.newsletter.click(newsletterValidation);
    form.email.focusout(newsletterValidation);
    form.lastName.focusout(lastNameValidation);
    form.mediaChannelSelect.change(otherMediaChannelValidation);
    form.firstName.focusout(firstNameValidation);
});
function newsletterValidation() {
    if (form.newsletter.is(':checked') && !form.email.val()) {
        form.emailMandatory.show();
        form.validationErrors.email = false;
        submitValidation();
    }
    else {
        form.emailMandatory.hide();
        form.validationErrors.email = true;
        submitValidation();
    }
}
function firstNameValidation() {
    if (!form.firstName.val()) {
        form.firstNameMandatory.show();
        form.validationErrors.firstname = false;
        submitValidation();
    }
    else {
        form.firstNameMandatory.hide();
        form.validationErrors.firstname = true;
        console.log(form.validationErrors.getValidationState());
        submitValidation();
    }
}
function submitValidation() {
    if (form.validationErrors.getValidationState() == true) {
        form.submit.show();
    }
    else {
        form.submit.hide();
    }
}
function lastNameValidation() {
    if (!form.lastName.val()) {
        form.lastNameMandatory.show();
        form.validationErrors.lastName = false;
        submitValidation();
    }
    else {
        form.lastNameMandatory.hide();
        form.validationErrors.lastname = true;
        submitValidation();
    }
}
function otherMediaChannelValidation() {
    //console.log(form.mediaChannelSelect.val())
    if (form.mediaChannelSelect.val() == 'Other') {
        form.otherMediaChannel.show();
        //form.validationErrors.otherMediaChannel = true;
        //submitValidation();
    }
    else {
        form.otherMediaChannel.hide();
        //form.validationErrors.otherMediaChannel = false;
    }
}
function hideAll(objects) {
    for (var i = 0; i < objects.length; i++) {
        objects[i].hide();
    }
}
var Form = /** @class */ (function () {
    function Form(firstName, lastName, firstNameMandatory, lastNameMandatory, email, emailMandatory, mediaChannelSelect, otherMediaChannel, newsletter, submit) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstNameMandatory = firstNameMandatory;
        this.lastNameMandatory = lastNameMandatory;
        this.email = email;
        this.emailMandatory = emailMandatory;
        this.mediaChannelSelect = mediaChannelSelect;
        this.otherMediaChannel = otherMediaChannel;
        this.newsletter = newsletter;
        this.submit = submit;
        this.validationErrors = new ValidationErrors();
    }
    return Form;
}());
var ValidationErrors = /** @class */ (function () {
    //otherMediaChannel: boolean;
    function ValidationErrors() {
        this.firstname = false;
        this.lastname = false;
        this.email = true;
        //this.otherMediaChannel = false;
    }
    ValidationErrors.prototype.getValidationState = function () {
        return (this.firstname == true && this.lastname == true && this.email == true /*&& this.otherMediaChannel == true*/);
    };
    return ValidationErrors;
}());
