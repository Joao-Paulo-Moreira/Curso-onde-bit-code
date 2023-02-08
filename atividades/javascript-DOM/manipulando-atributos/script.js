const input = document.getElementById('input');

document.getElementById('value').addEventListener('click', function(ev){
   console.log(input.value = input.value === '' ? 'Olá, mundo!' : '');
   console.log(input.getAttribute('value'))
})

document.getElementById('type').addEventListener('click', function() {
   input.type = input.type !== 'radio' ? 'radio' : 'text'; //Eu prefiro usar essa maneira, pois o elemento muda de text para radio e de radio para text
   /* input.setAttribute('type', 'radio') */
})

document.getElementById('placeholder').addEventListener('click', function() {
   input.placeholder = input.placeholder === '' ? 'Dígite um valor' : ''
})

document.getElementById('disable').addEventListener('click', function() {
   input.setAttribute('disabled', !input.disabled) 
})

document.getElementById('data').addEventListener('click', function() {
   const data = input.dataset.something;
   console.log(`O valor do atributo data-something é: ${data}`);
   input.dataset.something = 'Hello, world!';
   console.log(`O valor do atributo data-something é: ${input.dataset.something}`);
})