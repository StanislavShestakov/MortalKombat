// import Game from './game.js';
//
// const game = new Game();
//
// game.start();


const q = new Promise(function (resolve, reject){
    const data ={
        status: 200,
        msg: 'Success'
    };
    resolve(data);
});

console.log(q);

q.then(function (data){
    console.log(data);
    const clientData = {
        ...data,
        name: 'Zar',
    }
    return clientData;
}).then(function (clientData){
    console.log(clientData);

});