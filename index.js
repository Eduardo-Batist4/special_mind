const content = document.querySelector('.content');
const startBtn = document.querySelector('#start-btn');
const easy = document.querySelector('.easy-check');
const color = document.querySelector('.color');

const contentList = ['Diga o nome de um Animal', 1, '<--', 2, 'amarelo', 3, 'vermelho', 4, 'Diga o nome de uma Cidade',  5, '-->', 6, '<-- -->', 7, 'azul', 8, 'verde', 9, 'Diga o nome de uma Fruta' ];
let availableItems = [ ...contentList ];

startBtn.addEventListener('click', () => {
    if(easy.checked) {
        const time = setInterval(() => {
            
            if(availableItems.length === 0) {
                clearInterval(time);
                return;
            }
            
            const randomIndex = Math.floor(Math.random() * availableItems.length);
            const selectedItem = availableItems[randomIndex];

            availableItems.splice(randomIndex, 1);

            console.log(selectedItem);

            if(selectedItem === 'amarelo') {
                content.style.fontSize = '20px'
                content.style.color = 'yellow'
                content.style.width = '200px'
                content.style.height = '200px'
                content.style.display = 'flex'
                content.style.justifyContent = 'center'
                content.style.alignItems = 'center'
                content.style.borderRadius = '50%'
                content.style.backgroundColor = 'yellow'
                content.style.textTransform = 'uppercase'
            } else if(selectedItem === 'vermelho') {
                content.style.fontSize = '20px'
                content.style.color = 'red'
                content.style.width = '200px'
                content.style.height = '200px'
                content.style.display = 'flex'
                content.style.justifyContent = 'center'
                content.style.alignItems = 'center'
                content.style.borderRadius = '50%'
                content.style.backgroundColor = 'red'
                content.style.textTransform = 'uppercase'
            } else if(selectedItem === 'azul') {
                content.style.fontSize = '20px'
                content.style.color = 'blue'
                content.style.width = '200px'
                content.style.height = '200px'
                content.style.display = 'flex'
                content.style.justifyContent = 'center'
                content.style.alignItems = 'center'
                content.style.borderRadius = '50%'
                content.style.backgroundColor = 'blue'
                content.style.textTransform = 'uppercase'
            } else if(selectedItem === 'verde') {
                content.style.fontSize = '20px'
                content.style.color = 'green'
                content.style.width = '200px'
                content.style.height = '200px'
                content.style.display = 'flex'
                content.style.justifyContent = 'center'
                content.style.alignItems = 'center'
                content.style.borderRadius = '50%'
                content.style.backgroundColor = 'green'
                content.style.textTransform = 'uppercase'
            } else if(typeof selectedItem === 'number') {
                content.style.fontSize = '100px'
                content.style.color = 'black'
                content.style.backgroundColor = 'transparent'
                content.style.textAlign = 'center'
            }
            else {
                 content.style.fontSize = '50px'
                 content.style.color = 'black'
                 content.style.backgroundColor = 'transparent'
                 content.style.textAlign = 'center'
            }

            content.textContent = selectedItem;

        }, 3500);

        setTimeout(() => {
            clearInterval(time)
            content.textContent = "";

            availableItems = [...contentList];
        }, 20000);

    } 
});
