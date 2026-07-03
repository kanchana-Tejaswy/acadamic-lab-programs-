function validateForm() {

    // Get values from the form
    let fullname = document.getElementById("fullname").value;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmpassword").value;
    let dob = document.getElementById("dob").value;

    // Get selected gender
    let gender = document.querySelector('input[name="gender"]:checked');

    // Check Full Name
    if (fullname == "") {
        alert("Please enter your Full Name.");
        return false;
    }

    // Check Username
    if (username.length < 5) {
        alert("Username must contain at least 5 characters.");
        return false;
    }

    // Check Password Length
    if (password.length < 8) {
        alert("Password must contain at least 8 characters.");
        return false;
    }

    // Check Password Match
    if (password != confirmPassword) {
        alert("Passwords do not match.");
        return false;
    }

    // Check Gender
    if (gender == null) {
        alert("Please select your gender.");
        return false;
    }

    // Check Date of Birth
    if (dob == "") {
        alert("Please select your Date of Birth.");
        return false;
    }

    // Success
    alert("Registration Successful!");

    return true;
}