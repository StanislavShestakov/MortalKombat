const player1 = {
    name:'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['chain','thorn'],
    attack: function(){
        console.log(this.name + ' Fight.... ');
    }
};
const player2 = {
    name:'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['cold','water'],
    attack: function(){
        console.log(this.name + ' Fight.... ');
    }
};

function createPlayer(str,player){
    const $player1 = document.createElement('div');
    $player1.classList.add(str);

    const $progressbar = document.createElement('div');
    $progressbar.classList.add('progressbar');
    const $life = document.createElement('div');
    $life.classList.add('life');
    $life.style.width = player.hp + '%';
    const $name = document.createElement('div');
    $name.classList.add('name');
    $name.innerText = player.name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = document.createElement('div');
    const $img = document.createElement('img');
    $img.src = player.img;
    $character.appendChild($img);
    $character.classList.add('character');

    $player1.appendChild($progressbar);
    $player1.appendChild($character);

    const $root = document.querySelector('.root .arenas');
    $root.appendChild($player1);
}
createPlayer('player1',player1);
createPlayer('player2',player2);
