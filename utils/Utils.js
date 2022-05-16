function isValidEmail(value) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(value).toLowerCase());
}

function validateEmail(value, setEmailError) {
    if (value == "") {
        setEmailError("")
        return true
    }
    else if (isValidEmail(value)) {
        setEmailError("")
        return true
    }
    else {
        setEmailError("Invalid Email")
        return false
    }
}

function validatePassword(value, setPasswordError) {

    if (value.length < 9) {
        setPasswordError("Password must be 9 characters")
        return false;
    } else {
        setPasswordError("")
        return true
    }

}

const utils = {
    isValidEmail,
    validateEmail,
    validatePassword
};

export default utils;