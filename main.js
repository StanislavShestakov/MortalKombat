// import Game from './game.js';
//
// const game = new Game();
//
// game.start();


setTimeout(() => console.log(0));

console.log(1);

const q = new Promise((resolve => {
    console.log(2)
    setTimeout(() =>resolve(),2000) ;
}));

console.log(3);

q.then(()=>console.log(4));

console.log(5);

// output
// 1
// 2
// 3
// 5
// 0
// 5 after 2000ms
