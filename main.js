const $arenas = document.querySelector('.root .arenas');

const player1 = {
    player:1,
    name:'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon:['chain','thorn'],
    attack: function(){
        console.log(this.name + ' Fight.... ');
    }
};
const player2 = {
    player:2,
    name:'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon:['cold','water'],
    attack: function(){
        console.log(this.name + ' Fight.... ');
    }
};

function createElement(tag,className){
    const $tag = document.createElement(tag);
    if(className) {
        $tag.classList.add(className);
    }
    return $tag;
}
function createPlayer(playerObj){
    const $player = createElement('div', 'player' + playerObj.player);

    const $progressbar = createElement('div','progressbar');
    const $life = createElement('div','life');
    $life.style.width = playerObj.hp + '%';
    const $name = createElement('div','name');
    $name.innerText = playerObj.name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = createElement('div','character');
    const $img = createElement('img');
    $img.src = playerObj.img;
    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);


    return $player;
}
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

