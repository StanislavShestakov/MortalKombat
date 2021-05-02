// import Game from './game.js';
//
// const game = new Game();
//
// game.start();

async  function getPlayers(){
    const q = await fetch('https://reactmarathon-api.herokuapp.com/api/mk/players');
    const body = await  q.json();
    console.log(body);
    return body;
}

getPlayers();