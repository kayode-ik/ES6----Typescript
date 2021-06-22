const select = document.getElementById('weather');
const para = document.querySelector('p');

const btn = document.getElementById('btn');
const par = document.getElementById('par');


select.addEventListener('change', setWeather);
function setWeather(){
    const choice = select.value;
    
    if (choice === 'sunny') {
        para.innerHTML = 'It is nice and sunny';
    }else if(choice === 'rainy'){
        para.textContent = 'It is rainy';
    }
    else if(choice === 'snowing'){
        para.textContent = 'It is snowing';
    }else if(choice === 'overcast'){
        para.textContent = 'It is overcast';
    }else {
        para.textContent = " ";
    }
}


btn.addEventListener('click', clickk);

function clickk(){
par.innerHTML = 'I was clicked';
}


const select2 = document.getElementById('theme');
const h1 = document.querySelector('html');
document.body.style.padding = '10px';

function update(bgColor, textColor){
    h1.style.backgroundColor = bgColor;
    h1.style.color = textColor;
}

select2.onchange = function(){
    const choice = select2.value;
    // (select2.value === 'black') ? update('black','white') : update('white','black')
    switch (choice) {
        case 'black':
            update('black','white'); 
            break;
        case 'white':
            update('white','black'); 
            break;
    
        default: 
            break;
    }
}

// For loop
const cats = ['Bill', 'Jeff', 'Pete', 'Biggles', 'Jasmin'];
let info = 'My cats are called ';

const parag = document.getElementById('para');

for (let i = 0; i < cats.length; i++) {
    info += cats[i] + ', ';
    
}

parag.textContent = info;


// do while loop
// let i = 0;

// while(i < cats.length) {
//     if (i === cats.length - 1){
//         info += ' and ' + cats[i] + '.';
//     }else {
//         info += cats[i] + ',';
//     }
//     i++;
// }


const contacts = ['Chris:2232322', 'Sarah:3453456', 'Bill:7654322', 'Mary:9998769', 'Dianne:9384975'];
const para2 = document.getElementById('pp');
const input = document.getElementById('search');
const btn2 = document.getElementById('btn2');

btn2.addEventListener('click', function(){
    let searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();

    for (let i = 0; i < contacts.length; i++) {
     let splitContact = contacts[i].split(':');

     if (splitContact[0].toLowerCase() === searchName) {
        para2.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
        break;  
    } 
    else if (i === contacts.length -1) {
        para2.textContent = 'Contacts  not found';
        } 
    }
});

const people = ['Chris', 'Anne', 'Colin', 'Terri', 'Phil', 'Lola', 'Sam', 'Kay', 'Bruce'];

// people.length 

const admitted = document.querySelector('.admitted');
const refused = document.querySelector('.refused');

admitted.textContent = 'Admit: ';
refused.textContent = 'Refuse: ';

let i = 0;

do{
    if(people[i] === 'Phil' || people[i] === 'Lola'){
        refused.textContent += people[i] + ',';

    }else {
        admitted.textContent += people[i] + ',';
    }

    i++;
}while (i < people.length);

refused.textContent = refused.textContent.slice(0, refused.textContent.length-2) + '.';

admitted.textContent = admitted.textContent.slice(0, admitted.textContent.length-2) + '.';

const fem = ['kay','hhjd']

fem[0]