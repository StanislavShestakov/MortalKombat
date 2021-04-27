import {LOGS} from "./constants";
import { getTime,getRandom} from "./utils";

const $chat = document.querySelector('.chat');

function generateLogs(type, player1, player2, valueHP = 0) {
    let text;
    let el;
    switch (type) {
        case  'hit':
            text = LOGS[type][getRandom(LOGS.hit.length) - 1].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name)
                + ' -' + valueHP + '.' + player1.name + ' ' + player1.hp + '/100';
            break;
        case 'defence':
            text = LOGS[type][getRandom(LOGS.defence.length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)
                + ' -' + valueHP + '.' + player2.name + ' ' + player2.hp + '/100';
            break;
        case 'start':
            text = LOGS[type].replace('[time]', getTime).replace('[player1]', player1.name).replace('[player2]', player2.name);
            break;
        case 'end':
            text = LOGS[type][getRandom(LOGS.end.length) - 1].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
            break;
        case 'draw':
            text = LOGS[type];
            break;
        default:
            text = 'ничего не произошло';
            break;
    }
    el = `<p>${getTime()} ${text}</p>`;
    console.log(el);
    $chat.insertAdjacentHTML('afterbegin', el);
}
export default generateLogs;