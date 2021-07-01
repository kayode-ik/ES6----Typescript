const code = document.querySelector('h1');

const input = document.querySelector('input');
const firstNameText = document.getElementById('firstname');
const lastNameText = document.getElementById('lastname');
const btnbtn = document.getElementById('btn');


const btnSubmit = btnbtn.addEventListener('click', () => {
    let fnText = firstNameText.value;
    let lnText = lastNameText.value;
    let details = code;

    let fullName = fnText + " " + lnText;

    details = fullName.innerHTML;

    console.log(fullName      );

})

