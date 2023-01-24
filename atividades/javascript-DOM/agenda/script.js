function criarNovoElemento() {
   const dataSection = document.getElementById('inserirDados');

   const h3 = document.createElement('h3');
   h3.innerText = 'Contato';
   
   const ul = document.createElement('ul');
   
   const nameLi = document.createElement('li');
   nameLi.innerText = 'Nome:';
   
   const nameInput = document.createElement('input');
   nameInput.type = 'text';
   nameInput.name = 'fullName';
   
   nameLi.appendChild(nameInput)
   ul.appendChild(nameLi)
   ul.appendChild(document.createElement('br'));
   
   
   
   const phoneLi = document.createElement('li');
   phoneLi.innerText = 'Tel:';
   
   const phoneInput = document.createElement('input');
   phoneInput.type = 'text';
   phoneInput.name = 'fullName';
   
   phoneLi.appendChild(phoneInput)
   ul.appendChild(phoneLi)
   ul.appendChild(document.createElement('br'));
   
   const addresLi = document.createElement('li');
   addresLi.innerHTML = '<label for="addres">Endereço:</label>';
   const addresInput = document.createElement('input');
   addresInput.type = 'text';
   addresInput.name = 'addres';
   addresInput.id = 'addres';

   addresLi.appendChild(addresInput);
   ul.appendChild(addresLi);
   ul.appendChild(document.createElement('br'));


   dataSection.append(h3, ul)
}

////////////////////////////////////////////////////////////////

function removerElemento() {
   const dataSection = document.getElementById('inserirDados');

   const titles = document.getElementsByTagName('h3');

   const contacts = document.getElementsByTagName('ul');

   dataSection.removeChild(titles[titles.length - 1]);
   dataSection.removeChild(contacts[contacts.length - 1]);
}