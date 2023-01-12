

const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
    event.preventDefault();
    let currentForm = event.currentTarget;
    let inputs = currentForm.getElementsByTagName("input");
    // debugger;

    let object = {};
    let isInputsEmpty = false;

    for (let i = 0; i < inputs.length; i += 1) {
        let input = inputs[i];
        let property = input.name;
        if (input.value.length == 0) {
            alert('Please fill all fields');
            isInputsEmpty = true;
            break;
        } else {
            object[property] = input.value;
        };
    };

    if (isInputsEmpty == false) {
        console.log(object);
        currentForm.reset();
    };
};


