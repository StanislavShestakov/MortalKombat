const $arenas = document.querySelector('.arenas');
const $fightButton = document.querySelector('.buttonWrap .button');

const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head','body','foot'];

const player1 = {
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
    weapon: ['chain', 'thorn'],
    attack: function () {
        console.log(this.name + ' Fight.... ');
    },
    changeHP,
    renderHP,
    elHP

};
const player2 = {
    player: 2,
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
    weapon: ['cold', 'water'],
    attack: function () {
        console.log(this.name + ' Fight.... ' );
    },
    changeHP,
    renderHP,
    elHP
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



function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    if(name) {
        $loseTitle.innerText = name + ' win';
    }else{
        $loseTitle.innerText = 'Draw';
    }

    return $loseTitle;
}

function changeHP(amount){
    this.hp -= amount;

    if (this.hp <= 0) {
        this.hp=0;
    }
}
function elHP(){
    return document.querySelector('.player' + this.player + ' .life');
}
function renderHP(){
    this.elHP().style.width = this.hp + '%';
}

function createReloadButton(){
    const $restart = createElement('div', 'reloadWrap');
    const $restartButton = createElement('button', 'button');
    $restartButton.innerText = "Restart";
    $restart.appendChild($restartButton);
    $restart.addEventListener('click', function () {window.location.reload()})
    return $restart;
}


function  getRandom(num){
    return Math.ceil(Math.random()*num);
}

$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


function Attack(targetAttack, targetDefence){
    let hit = ATTACK[getRandom(3)-1];
    let defence = ATTACK[getRandom(3)-1];
    let value = getRandom(HIT[hit]);
    if(targetAttack){
        value = getRandom(HIT[targetAttack]);
        hit = targetAttack;
    }
    if(targetDefence){
        defence = targetDefence;
    }
    return{
        value,
        hit,
        defence,
    }
}

$formFight.addEventListener('submit', function (e){
    e.preventDefault();
    let at;
    let def;
    for(let item of $formFight){
       if(item.checked && item.name === 'hit'){
           at = item.value;
       }
        if(item.checked && item.name === 'defence'){
           def = item.value;
        }
        item.checked = false;
    }
    const enemy = Attack();
    const attak = Attack(at,def);

    console.log('####: attak', attak);
    console.log('####: attak', enemy);
    if(attak.hit != enemy.defence){
        player2.changeHP(attak.value);
    }
    if(enemy.hit != attak.defence){
        player1.changeHP(enemy.value);
    }
    player1.renderHP();
    player2.renderHP();

    if(player1.hp === 0 || player2.hp === 0){
        $fightButton.remove();
    }
    let isWin = false;
    if(player1.hp === 0 && player1.hp < player2.hp){
        $arenas.appendChild(playerWin(player2.name));
        isWin = true;
    }else if (player2.hp === 0 && player2.hp < player1.hp){
        $arenas.appendChild(playerWin(player1.name));
        isWin = true;
    }else if(player1.hp === 0 && player2.hp === 0){
        $arenas.appendChild(playerWin());
        isWin = true;
    }
    if(isWin){

        $arenas.appendChild(createReloadButton());
    }

})