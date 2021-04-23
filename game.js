import Player from "./player.js";
import generateLogs from "./generate_logs.js";
import createElement from "./create_element.js";
import getRandom from "./get_random.js";
import setDamage from "./set_damage.js";

const $arenas = document.querySelector('.arenas');
const $fightButton = document.querySelector('.buttonWrap .button');
const $formFight = document.querySelector('.control');

const HIT = {
    head: 30,
    body: 25,
    foot: 20,
}

const ATTACK = ['head', 'body', 'foot'];

const player1 = new Player({
    player: 1,
    name: 'Scorpion',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/scorpion.gif',
});
const player2 = new Player({
    player: 2,
    name: 'SubZero',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/subzero.gif',
});


class Game {


    createPlayer = ({player, hp, name, img}) => {
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


        return $player;
    }


    getChecked = () => {
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
    isWin = () => {
        if (player1.hp === 0 || player2.hp === 0) {
            $fightButton.remove();
        }
        let isWin = false;
        if (player1.hp === 0 && player1.hp < player2.hp) {
            $arenas.appendChild(this.playerWin(player2.name));
            generateLogs('end', player2, player1);
            isWin = true;
        } else if (player2.hp === 0 && player2.hp < player1.hp) {
            $arenas.appendChild(this.playerWin(player1.name))
            generateLogs('end', player1, player2);
            isWin = true;
        } else if (player1.hp === 0 && player2.hp === 0) {
            $arenas.appendChild(this.playerWin());
            generateLogs('draw');
            isWin = true;
        }
        if (isWin) {
            $arenas.appendChild(this.createReloadButton());
        }
    }

    playerWin = (name) => {
        const $loseTitle = createElement('div', 'loseTitle');
        if (name) {
            $loseTitle.innerText = name + ' win';
        } else {
            $loseTitle.innerText = 'Draw';
        }

        return $loseTitle;
    }

    createReloadButton = () => {
        const $restart = createElement('div', 'reloadWrap');
        const $restartButton = createElement('button', 'button');
        $restartButton.innerText = "Restart";
        $restart.appendChild($restartButton);
        $restart.addEventListener('click', function () {
            window.location.reload()
        })
        return $restart;
    }

    attack = (targetAttack, targetDefence) => {
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
    action = () => {
        const enemy = this.attack();
        const atDefArr = this.getChecked();
        const attackC = this.attack(atDefArr.at, atDefArr.def);

        console.log('####: attack', attackC);
        console.log('####: attack', enemy);

        setDamage(attackC, enemy, player1, player1, player2);
        setDamage(attackC, enemy, player2, player1, player2);

        player1.renderHP();
        player2.renderHP();

        this.isWin();
    }
    start = () => {
        const g = this;
        generateLogs('start', player1, player2);
        $formFight.addEventListener('submit', function (e) {
            e.preventDefault();
            g.action();
        });
        $arenas.appendChild(this.createPlayer(player1));
        $arenas.appendChild(this.createPlayer(player2));
    }


}

export default Game;