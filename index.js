var form;
$(document).ready(function () {
    form = new Form($('#firstname'), $('#lastName'), $('#firstNameMandatory'), $('#lastNameMandatory'), $('#email'), $('#emailMandatory'), $('#mediaChannelSelect'), $('#otherMediaChannel'), $('#newsletter'));
    hideAll(new Array(/*$('#firstNameMandatory'), $('#lastNameMandatory'),*/ form.emailMandatory, form.otherMediaChannel));
    form.newsletter.click(newsletterValidation);
    form.email.focusout(newsletterValidation);
    form.firstName.focusout(firstNameValidation);
    form.lastName.focusout(lastNameValidation);
    form.mediaChannelSelect.change(otherMediaChannelValidation);
});
function newsletterValidation() {
    if (form.newsletter.is(':checked') && !form.email.val()) {
        form.emailMandatory.show();
    }
    else {
        form.emailMandatory.hide();
    }
}
function firstNameValidation() {
    if (!form.firstName.val()) {
        form.firstNameMandatory.show();
    }
    else {
        form.firstNameMandatory.hide();
    }
}
function lastNameValidation() {
    if (!form.lastName.val()) {
        form.lastNameMandatory.show();
    }
    else {
        form.lastNameMandatory.hide();
    }
}
function otherMediaChannelValidation() {
    //console.log(form.mediaChannelSelect.val())
    if (form.mediaChannelSelect.val() == 'Other') {
        form.otherMediaChannel.show();
    }
    else {
        form.otherMediaChannel.hide();
    }
}
function hideAll(objects) {
    for (var i = 0; i < objects.length; i++) {
        objects[i].hide();
    }
}
var Form = /** @class */ (function () {
    function Form(firstName, lastName, firstNameMandatory, lastNameMandatory, email, emailMandatory, mediaChannelSelect, otherMediaChannel, newsletter) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.firstNameMandatory = firstNameMandatory;
        this.lastNameMandatory = lastNameMandatory;
        this.email = email;
        this.emailMandatory = emailMandatory;
        this.mediaChannelSelect = mediaChannelSelect;
        this.otherMediaChannel = otherMediaChannel;
        this.newsletter = newsletter;
    }
    return Form;
}());
