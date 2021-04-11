const $arenas = document.querySelector('.arenas');
const $randomButton = document.querySelector('.button');

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['chain', 'thorn'],
    attack: function () {
        console.log(this.name + ' Fight.... ');
    }
};
const player2 = {
    player: 2,
    name: 'SubZero',
    hp: 50,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['cold', 'water'],
    attack: function () {
        console.log(this.name + ' Fight.... ');
    }
};

function createElement(tag, className) {
    const $tag = document.createElement(tag);
    if (className) {
        $tag.classList.add(className);
    }
    return $tag;
}

function createPlayer(playerObj) {
    const $player = createElement('div', 'player' + playerObj.player);

    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    $life.style.width = playerObj.hp + '%';
    const $name = createElement('div', 'name');
    $name.innerText = playerObj.name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = createElement('div', 'character');
    const $img = createElement('img');
    $img.src = playerObj.img;
    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);


    return $player;
}

function changeHP(player) {
    const $playerLife = document.querySelector('.player' + player.player + ' .life');
    player.hp -= Math.ceil(Math.random()*20);
    //console.log(player.hp);
    if(player.hp > 0) {
        $playerLife.style.width = player.hp + '%';
    }else{
        $playerLife.style.width = '0';
    }

    if(player.hp < 0){
        $randomButton.disabled = true;
        //$arenas.appendChild(playertLose(player.name));
        $arenas.appendChild(playerWin(player.name));
    }
}
function playerWin(name){
    const $winTitle = createElement('div','loseTitle');
    $winTitle.innerText = 'Scorpion win';
    if(name === 'Scorpion'){
    $winTitle.innerText = 'SubZero win';}

    return $winTitle;
}
function playertLose(name){
    const $loseTitle = createElement('div','loseTitle');
    $loseTitle.innerText = name + ' lose';

    return $loseTitle;
}

$randomButton.addEventListener('click', function () {
    console.log('#### click random button');
    changeHP(player1);
    changeHP(player2);

})

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));

