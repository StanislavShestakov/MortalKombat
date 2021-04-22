import getRandom from './get_random.js';
import setDamage from "./set_damage.js";
import generateLogs from "./generate_logs.js";
import changeHP from "./change_hp.js";
import createElement from "./create_element.js";




const $root = document.querySelector('.root');
const $arenas = document.querySelector('.arenas');
const $fightButton = document.querySelector('.buttonWrap .button');


const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const logs = {
    start: 'Часы показывали [time], когда [player1] и [player2] бросили вызов друг другу.',
    end: [
        'Результат удара [playerWins]: [playerLose] - труп',
        '[playerLose] погиб от удара бойца [playerWins]',
        'Результат боя: [playerLose] - жертва, [playerWins] - убийца',
    ],
    hit: [
        '[playerDefence] пытался сконцентрироваться, но [playerKick] разбежавшись раздробил копчиком левое ухо врага.',
        '[playerDefence] расстроился, как вдруг, неожиданно [playerKick] случайно раздробил грудью грудину противника.',
        '[playerDefence] зажмурился, а в это время [playerKick], прослезившись, раздробил кулаком пах оппонента.',
        '[playerDefence] чесал <вырезано цензурой>, и внезапно неустрашимый [playerKick] отчаянно размозжил грудью левый бицепс оппонента.',
        '[playerDefence] задумался, но внезапно [playerKick] случайно влепил грубый удар копчиком в пояс оппонента.',
        '[playerDefence] ковырялся в зубах, но [playerKick] проснувшись влепил тяжелый удар пальцем в кадык врага.',
        '[playerDefence] вспомнил что-то важное, но внезапно [playerKick] зевнув, размозжил открытой ладонью челюсть противника.',
        '[playerDefence] осмотрелся, и в это время [playerKick] мимоходом раздробил стопой аппендикс соперника.',
        '[playerDefence] кашлянул, но внезапно [playerKick] показав палец, размозжил пальцем грудь соперника.',
        '[playerDefence] пытался что-то сказать, а жестокий [playerKick] проснувшись размозжил копчиком левую ногу противника.',
        '[playerDefence] забылся, как внезапно безумный [playerKick] со скуки, влепил удар коленом в левый бок соперника.',
        '[playerDefence] поперхнулся, а за это [playerKick] мимоходом раздробил коленом висок врага.',
        '[playerDefence] расстроился, а в это время наглый [playerKick] пошатнувшись размозжил копчиком губы оппонента.',
        '[playerDefence] осмотрелся, но внезапно [playerKick] робко размозжил коленом левый глаз противника.',
        '[playerDefence] осмотрелся, а [playerKick] вломил дробящий удар плечом, пробив блок, куда обычно не бьют оппонента.',
        '[playerDefence] ковырялся в зубах, как вдруг, неожиданно [playerKick] отчаянно размозжил плечом мышцы пресса оппонента.',
        '[playerDefence] пришел в себя, и в это время [playerKick] провел разбивающий удар кистью руки, пробив блок, в голень противника.',
        '[playerDefence] пошатнулся, а в это время [playerKick] хихикая влепил грубый удар открытой ладонью по бедрам врага.',
    ],
    defence: [
        '[playerKick] потерял момент и храбрый [playerDefence] отпрыгнул от удара открытой ладонью в ключицу.',
        '[playerKick] не контролировал ситуацию, и потому [playerDefence] поставил блок на удар пяткой в правую грудь.',
        '[playerKick] потерял момент и [playerDefence] поставил блок на удар коленом по селезенке.',
        '[playerKick] поскользнулся и задумчивый [playerDefence] поставил блок на тычок головой в бровь.',
        '[playerKick] старался провести удар, но непобедимый [playerDefence] ушел в сторону от удара копчиком прямо в пятку.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.',
        '[playerKick] не думал о бое, потому расстроенный [playerDefence] отпрыгнул от удара кулаком куда обычно не бьют.',
        '[playerKick] обманулся и жестокий [playerDefence] блокировал удар стопой в солнечное сплетение.'
    ],
    draw: 'Ничья - это тоже победа!'
};

export default logs;

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
        console.log(this.name + ' Fight.... ');
    },
    changeHP,
    renderHP,
    elHP
};



function createPlayer({player,hp,name,img}) {
    const $player = createElement('div', `player${player}`);

    const $progressbar = createElement('div', 'progressbar');
    const $life = createElement('div', 'life');
    $life.style.width = `${hp}%`;
    const $name = createElement('div', 'name');
    $name.innerText = name;
    $progressbar.appendChild($life);
    $progressbar.appendChild($name);

    const $character = createElement('div', 'character');
    const $img = createElement('img');
    $img.src = img;
    $character.appendChild($img);

    $player.appendChild($progressbar);
    $player.appendChild($character);


    return  $player;

}
$arenas.appendChild(createPlayer(player1));
$arenas.appendChild(createPlayer(player2));


function playerWin(name) {
    const $loseTitle = createElement('div', 'loseTitle');
    if (name) {
        $loseTitle.innerText = name + ' win';
    } else {
        $loseTitle.innerText = 'Draw';
    }

    return $loseTitle;
}


function elHP() {
    return document.querySelector(`.player${this.player} .life`);
}

function renderHP() {
    this.elHP().style.width = `${this.hp}%`;
}

function createReloadButton() {
    const $restart = createElement('div', 'reloadWrap');
    const $restartButton = createElement('button', 'button');
    $restartButton.innerText = "Restart";
    $restart.appendChild($restartButton);
    $restart.addEventListener('click', function () {
        window.location.reload()
    })
    return $restart;
}





function attack(targetAttack, targetDefence) {
    let hit = ATTACK[getRandom(3) - 1];
    let defence = ATTACK[getRandom(3) - 1];
    let value = getRandom(HIT[hit]);
    if (targetAttack) {
        value = getRandom(HIT[targetAttack]);
        hit = targetAttack;
    }
    if (targetDefence) {
        defence = targetDefence;
    }
    return {
        value,
        hit,
        defence,
    }
}

function isWin() {
    if (player1.hp === 0 || player2.hp === 0) {
        $fightButton.remove();
    }
    let isWin = false;
    if (player1.hp === 0 && player1.hp < player2.hp) {
        $arenas.appendChild(playerWin(player2.name));
        generateLogs('end', player2, player1);
        isWin = true;
    } else if (player2.hp === 0 && player2.hp < player1.hp) {
        $arenas.appendChild(playerWin(player1.name))
        generateLogs('end', player1, player2);
        isWin = true;
    } else if (player1.hp === 0 && player2.hp === 0) {
        $arenas.appendChild(playerWin());
        generateLogs('draw');
        isWin = true;
    }
    if (isWin) {
        $arenas.appendChild(createReloadButton());
    }
}

function getChecked() {
    let at;
    let def;
    for (let item of $formFight) {
        if (item.checked && item.name === 'hit') {
            at = item.value;
        }
        if (item.checked && item.name === 'defence') {
            def = item.value;
        }
        item.checked = false;
    }
    return {
        at,
        def
    }
}


$formFight.addEventListener('submit', function (e) {
    e.preventDefault();

    const enemy = attack();
    const atDefArr = getChecked();
    const attackC = attack(atDefArr.at, atDefArr.def);

    console.log('####: attack', attackC);
    console.log('####: attack', enemy);

    setDamage(attackC, enemy, player1, player1, player2);
    setDamage(attackC, enemy, player2, player1, player2);

    player1.renderHP();
    player2.renderHP();

    isWin();

})

generateLogs('start', player1, player2);