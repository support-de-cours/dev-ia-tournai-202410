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

    // const nodeFirstname = document.querySelector('#firstname');
    // const nodeFirstname = document.querySelector('[name=firstname]');
    // const nodeFirstname = form.querySelector('[name=firstname]');
    // const nodeFirstname = event.target.querySelector('[name=firstname]');
    // const nodeFirstname = event.target.firstname;

    // Firstname
    const nodeFirstname = form.firstname;
    const firstname     = nodeFirstname.value;

    // Lastname
    const nodeLastname  = form.lastname;
    const lastname      = nodeLastname.value;

    // Email 

    // Password


    // Check Controls
    // --

    // Firstname is required
    if (nodeFirstname.required && firstname.length <= 0) {
        nodeFirstname.style.borderColor = "red";

        const nodeError = document.createElement('div');
        nodeError.classList.add('error-message');
        nodeError.textContent = "Firstname is required";

        const parent = nodeFirstname.parentNode;
        parent.append(nodeError);
    }

    // Firstname must be a string (only a-z and dash)

    // Lastname is required
    
    // Lastname must be a string (only a-z and dash)

    // Email is required

    // Email syntax must be user@server.com

    // Password is required

    // Password must contain at least one lowercase character.
    // Password must contain at least one upper character.
    // Password must contain at least one number.
    // Password must contain at least one special char.
    // Password must contain 6 characters min.

});