const price = document.querySelector('#price');
const output = document.querySelector('.price-output');

const show = output.textContent = price.value;
console.log(show)

price.addEventListener('input', function() {
  output.textContent = price.value;
});