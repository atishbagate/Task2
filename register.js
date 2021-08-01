//custom method for checking spaces in input.
jQuery.validator.addMethod(
  "noSpace",
  function (value, element) {
    return value == "" || value.trim().length != 0;
  },
  "No space please and don't leave it empty"
);

//custom method for checking the valid emails
jQuery.validator.addMethod(
  "customEmail",
  function (value, element) {
    return (
      this.optional(element) ||
      /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(
        value
      )
    );
  },
  "Please enter valid email address!"
);

// custom method for alphanum value.
$.validator.addMethod(
  "alphanumeric",
  function (value, element) {
    return this.optional(element) || /^\w+$/i.test(value);
  },
  "Letters, numbers, and underscores only please"
);

//for numbers
$.validator.addMethod(
  "numberCheck",
  function (value, element) {
    return (
      this.optional(element) ||
      /^((\+[1-9]{1,4}[ \-]*)|(\([0-9]{2,3}\)[ \-]*)|([0-9]{2,4})[ \-]*)*?[0-9]{3,4}?[ \-]*[0-9]{3,4}?$/.test(
        value
      )
    );
  },
  " numbers  only please"
);

//getting element by id
var $registrationForm = $("#registration");
if ($registrationForm.length) {
  $registrationForm.validate({
    rules: {
      //for username
      fname: {
        required: true,
        noSpace: true,
      },
      lname: {
        required: true,
        noSpace: true,
      },
      email: {
        required: true,
        customEmail: true,
      },
      number: {
        required: true,
        numberCheck: true,
      },
      password: {
        required: true,
      },
      confirm: {
        required: true,
        equalTo: "#password",
      },
    },
    messages: {
      fname: {
        required: "Please enter first name!",
      },
      lname: {
        required: "Please enter last name!",
      },
      email: {
        required: "Please enter email!",
        //error message for the email field
        email: "Please enter valid email!",
      },
      number: {
        required: "Please enter number!",
        //error message for the email field
        email: "Please enter valid number!",
      },
      password: {
        required: "Please enter password!",
      },
      confirm: {
        required: "Please enter confirm password!",
        equalTo: "Please enter same password!",
      }
    },
  });
}
