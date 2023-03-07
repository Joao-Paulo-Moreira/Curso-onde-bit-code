document.getElementById('sessionBtn').addEventListener('click', function(){
     const input = document.getElementById('sessionStorage');
     window.sessionStorage.setItem('info', input.value);
     input.value = '';
});

document.getElementById('readSession').addEventListener('click', function(){
     const info = sessionStorage.getItem('info');
     alert(`Olá, mundo! a informação salva é: ${info}`);
});

document.getElementById('localStorageBtn').addEventListener('click', function(){
     const input = document.getElementById('localStorage');
     localStorage.setItem('text', input.value)
     input.value = '';
}); document.get

document.getElementById('readLocal').addEventListener('click', function(){
     const txt = localStorage.getItem('text');
     alert(`O item armazenado no local storage é: ${txt}`);
});

document.getElementById('cookieBtn').addEventListener('click', function () {
     const input = document.getElementById('cookie')
     // cookieName=value; expires=UTCStringDate; path=/;
     const cookie = 'info=' + input.value + ';'
     const expiration = 'expires=' + new Date(2022,9, 9) + ';'
     const path = 'path=/;'
     document.cookie = cookie + expiration + path
     input.value = ''
     console.log(document.cookie)
})

document.getElementById('cookie2Btn').addEventListener('click', function () {
     const input = document.getElementById('cookie2')
     // cookieName=value; expires=UTCStringDate; path=/;
     const cookie = 'text=' + input.value + ';'
     const expiration = 'expires=' + new Date(2022, 8, 9) + ';'
     const path = 'path=/;'
     document.cookie = cookie + expiration + path
     input.value = ''
     console.log(document.cookie)
})