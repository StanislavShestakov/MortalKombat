// import Game from './game.js';
//
// const game = new Game();
//
// game.start();

let players = [];

const q = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players');

console.log(q);

q.then(response => {
    console.log(response);
    return response.json();
}).then(data => players = data);

console.log(players);