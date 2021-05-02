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

async  function getPlayers(){
    console.log('start');
    const q = new Promise(resolve => setTimeout(()=> resolve(),5000));
    console.log('wait');
    await q;
    console.log('finish')
    return 1;
}

getPlayers().then(res => console.log(res));