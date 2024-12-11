let button = document.querySelector('#open-git');
let playholemole = document.querySelector('.play-holemole'); 
let amazone = document.querySelector('.view-amazone');
let currencyconvertor = document.querySelector('.view-currency-convertor');
let tictactoe = document.querySelector('.play-tic-tac-toe')
let menue = document.querySelector('.menu');
let mobile = document.querySelector('.mobile');f
let close = document.querySelector('.close');
let playcandycrush = document.querySelector('.play-candy-crush');
let jarvis = document.querySelector('.view-jarvis');

playcandycrush.addEventListener('click', () => {
    window.open("https://codeswithkeshavbatra.github.io/CandyCrush/CandyCrush.html");
})

jarvis.addEventListener('click', () => {
    window.open("https://codeswithkeshavbatra.github.io/Jarvis/Jarvis.html");
});

playholemole.addEventListener('click', () => {
    window.open("https://codeswithkeshavbatra.github.io/HoleAndMole/HoleAndMole.html")
});

button.addEventListener('click', () => {
    window.open("https://github.com/codeswithkeshavbatra");
});

amazone.addEventListener('click', () => {
    window.open("https://codeswithkeshavbatra.github.io/Amazone_clone/Amazone.html");
})

currencyconvertor.addEventListener('click', () => {
    window.open("https://codeswithkeshavbatra.github.io/CurrencyConverter/CurrencyConvertor.html");
})

tictactoe.addEventListener('click', () => {
    window.open("https://codeswithkeshavbatra.github.io/Tic-Tac-Toe/TicTacToe.html");
})

menue.addEventListener('click', () => {
    mobile.style.display = 'flex';
});

close.addEventListener('click', () => {
    mobile.style.display = 'none';
});