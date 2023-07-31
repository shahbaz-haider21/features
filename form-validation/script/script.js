$(document).ready(function () {
    // $("#usercheck").hide();
    // $("#emailvalid").hide();
    // $("#passcheck").hide();
    // $("#conpasscheck").hide();
    // $("#success").hide();

    // Validate Username

    let usernameError = true;
    $("#usernames").keyup(function () {
        validateUsername();
    });

    function validateUsername() {
        let usernameValue = $("#usernames").val();
        if (usernameValue.length == "") {
            $("#usercheck").show();
            $("#usercheck").html("Field Empty");
            usernameError = false;
            return false;
        } else if (usernameValue.length < 6 || usernameValue.length > 16) {
            $("#usercheck").show();
            $("#usercheck").html("length of username must be between 6 and 16");
            usernameError = false;
            return false;
        } else {
            $("#usercheck").hide();
            usernameError = true;
        }
    }


    //Validate Email

    let emailError = true;
    $("#email").keyup(function () {
        validateEmail();
    });

    function validateEmail() {
        var emailCharacter = /[a-z]+/;
        var emailNumber = /[0-9]+/;
        var emailSpecial = /[@._-]+/;
        var m = $('#email').val();

        if (emailCharacter.test(m) && emailNumber.test(m) && emailSpecial.test(m)) {
            $('#emailvalid').hide();
            emailError = true;
        }
        else if (m.length == "") {
            $("#emailvalid").show();
            $("#emailvalid").html("Field Empty")
            emailError = false;
            return false;
        }

        else {
            $("#emailvalid").show();
            $("#emailvalid").html("Invalid Email")
            emailError = false;
            return false;
        }

    }



    // Validate Password



    let passwordError = true;
    $("#password").keyup(function () {
        validatePassword();
    });

    function validatePassword() {
        var pwdLength = /^.{8,16}$/;
        var pwdUpper = /[A-Z]+/;
        var pwdLower = /[a-z]+/;
        var pwdNumber = /[0-9]+/;
        var pwdSpecial = /[!@#$%^&()'[\]"?+-/*={}.,;:_]+/;
        var s = $('#password').val();

        if (pwdUpper.test(s) && pwdLower.test(s) && (pwdLength.test(s)) && (pwdNumber.test(s)) && (pwdSpecial.test(s))) {
            $("#passcheck").hide();
            passwordError = true;
        }
        else if (s.length == "") {
            $("#passcheck").show();
            $("#passcheck").html("Field Empty")
            passwordError = false;
            return false;
        }
        else {
            $("#passcheck").show();
            $("#passcheck").html("<ul class='prompt'><li>Must have 8 characters</li><li>Should have atleast one Upper and Lower Case</li><li>Should have atleast one number [0-9]</li><li>Should contain one special character</li></ul>");
            passwordError = false;
            return false;
        }

    }

    // Validate Confirm Password

    let confirmError = true;
    $("#conpassword").keyup(function () {
        validateConfirm();
    });
    function validateConfirm() {
        var confirm = $('#conpassword').val();
        var pass = $('#password').val();

        if (confirm.length == "") {
            $("#conpasscheck").show();
            $("#conpasscheck").html("Field Empty")
            confirmError = false;
            return false;
        }
        else if (confirm != pass) {
            $("#conpasscheck").show();
            $("#conpasscheck").html("Password doesn't match")
            confirmError = false;
            return false;
        }
        else {
            $("#conpasscheck").hide();
            confirmError = true;
        }
    }

    // Submit Button 

    $("#submitbtn").click(function (e) {
        e.preventDefault();
        validateUsername();
        validateEmail();
        validatePassword();
        validateConfirm();
        if (usernameError == true && emailError == true && passwordError == true && confirmError == true) {
            // $("#usernames").val('')
            // $("#email").val('')
            // $("#password").val('')
            // $("#conpassword").val('')
            // alert("form sumited");
            $('.box').hide();
            $("#success").show();
        }
        else {
            return false;
        }
    })
    $("#btn-success").click(function(){
        location.reload(true);
    })
})