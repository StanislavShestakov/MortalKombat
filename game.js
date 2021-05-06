import { getRandom,createElement } from "./utils/index.js";
import {LOGS,ATTACK,HIT} from "./constants/index.js";

import Player from "./Player/index.js";
import generateLogs from "./generate_logs.js";
import setDamage from "./set_damage.js";

const $arenas = document.querySelector(`.arenas`);
const $fightButton = document.querySelector('.buttonWrap .button');
const $formFight = document.querySelector('.control');


let player1;
let player2;

class Game {
    getPlayers = async () =>{
        const body = fetch('https://reactmarathon-api.herokuapp.com/api/mk/players').then(res => res.json());
        return body;
    }

    getChecked = () => {
        let at;
        let def;
        for (let item of $formFight) {
            if (item.checked && item.name  === 'hit') {
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
            //window.location.reload();
            window.location.pathname = 'index.html';
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
    start = async () => {
        const players = await  this.getPlayers();
        let p1 = players[getRandom(players.length)-1];
        const plr1 = localStorage.getItem('player1');
        const pId = JSON.parse(plr1)['id'];
        for( let i = 0; i < players.length; i++){
            if(players[i].id === pId){
              p1 = players[i];
              break;
            }
        }
        const p2 = players[getRandom(players.length)-1];
        console.log(p1,p2);
        player1 = new Player({
           ...p1,
           player: 1,
           rootSelector: 'arenas',
        });
        player2 = new Player({
           ...p2,
           player: 2,
           rootSelector: 'arenas',
        });
        player1.createPlayer();
        player2.createPlayer();
        const g = this;
        generateLogs('start', player1, player2);
        $formFight.addEventListener('submit', function (e) {
            e.preventDefault();
            g.action();

        });

    }


}

export default Game;