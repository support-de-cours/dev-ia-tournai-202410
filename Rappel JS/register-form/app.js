const form = document.querySelector('[rel=js-myForm]');
// console.log(form);

const controls = form.querySelectorAll('input,select,textarea');
// console.log(controls);


// Add required symbols to <label> when the <input> has required attr
for (let i=0; i<controls.length; i++) 
{
    const control = controls[i];

    if (control.required) 
    {
        const parent = control.parentNode;
        const label = parent.querySelector(`label[for=${control.id}]`);
        label.classList.add('required');
    }    
}


form.addEventListener('submit', event => {

    event.preventDefault();


    // Retrieve Controls
    // --
    
    const firstname = form.firstname;
    const lastname  = form.lastname;
    const email     = form.email;
    const password  = form.password;


    // Reset Errors
    // --

    controls.forEach( control => resetError(control) );

    // Check Controls
    // --

    // Firstname
    checkControl(firstname, {
        required: {
            isRequired: firstname.required,
            message: "Firstname is required"
        },
        notMatch: {
            pattern: /^[a-z]+$/i,
            message: "Firstname must have alphabetical chars only"
        }
    });

    // Lastname 
    checkControl(lastname, {
        required: {
            isRequired: lastname.required,
            message: "Lastname is required"
        },
        notMatch: {
            pattern: /^[a-z]+$/i,
            message: "Lastname must have alphabetical chars only"
        }
    });

    // Email

    checkControl(email, {
        required: {
            isRequired: email.required,
            message: "Email is required"
        },
        notMatch: {
            pattern: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
            message: "The email address must be in the format 'example@domain.com'."
        }
    });


    // Password is required
    checkControl(password, {
        required: {
            isRequired: password.required,
            message: "Password is required"
        },
        minLength: {
            length: 6,
            message: "Password must contain at least 6 characters."
        },
        lowercase: {
            regex: /[a-z]/,
            message: "Password must contain at least one lowercase character."
        },
        uppercase: {
            regex: /[A-Z]/,
            message: "Password must contain at least one uppercase character."
        },
        digit: {
            regex: /\d/,
            message: "Password must contain at least one number."
        },
        specialChar: {
            regex: /[!@#$%^&*(),.?":{}|<>]/,
            message: "Password must contain at least one special character."
        }
    });

});

function checkControl(node, constraints)
{
    const value = node.value;
    let hasError = false;
    let message;


    // Is required
    if (constraints?.required?.isRequired && value.length <= 0) {
        hasError = true;
        message = constraints.required.message;
    }

    // Min Length
    else if (constraints.minLength && value.length < constraints.minLength.length) 
    {
        hasError = true;
        message = constraints.minLength.message;
    }

    // Lowercase
    else if (constraints.lowercase && !constraints.lowercase.regex.test(value)) 
    {
        hasError = true;
        message = constraints.lowercase.message;
    }

    // Uppercase
    else if (constraints.uppercase && !constraints.uppercase.regex.test(value)) 
    {
        hasError = true;
        message = constraints.uppercase.message;
    }

    // Digit
    else if (constraints.digit && !constraints.digit.regex.test(value)) 
    {
        hasError = true;
        message = constraints.digit.message;
    }

    // Special Character
    else if (constraints.specialChar && !constraints.specialChar.regex.test(value)) 
    {
        hasError = true;
        message = constraints.specialChar.message;
    }

    // Format / Syntax not match
    else if (constraints.notMatch && !constraints.notMatch.pattern.test(value)) {
        hasError = true;
        message = constraints.notMatch.message;
    }

    if (hasError) {
        node.classList.add('is-invalid');
        // node.style.borderColor = "red";

        const error = document.createElement('div');
        error.classList.add('error-message');
        error.textContent = message;

        const parent = node.parentNode;
        parent.append(error);
    }
}

function resetError(node)
{
    node.classList.remove('is-invalid');
    node.parentNode.querySelector('.error-message')?.remove();
}