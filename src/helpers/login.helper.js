const validateLoginFields = (email, password) => {
    var regexEmailPattern = /\w+([-+.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*/;
    if (email.length <=0 || password.length < 0) {
        return "Please fill all fields";
    } else if (!regexEmailPattern.test(email)) {
        return "Invalid Email";
    } else if (password.length < 6) {
        return "Password length is not up to 6 digits"
    } else {
        return true
    }
}

module.exports = {
    validateLoginFields
}