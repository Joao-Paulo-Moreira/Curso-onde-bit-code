---Desestruturação de ovjetos e arrays---

- permite criar variáveis a partir de propriedades de um objedto ou de uma array
- No caso das propriedades do objeto, as variáveis serão criadas com o mesmo nome das propriedade
- No caso das arrays podemos atribuir qualquer nome para a variável
- Também pode ser utilizada de outras formas, como nos parâmetros de uma função

Exemplo: 
```js
    const {name, email} = person;
    const [x, y] = coordinates;

    function hello({name}){
        console.log(`Hello ${name}`);
    }