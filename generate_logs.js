import getRandom from "./utils.js";
import logs from "./main.js";
const $chat = document.querySelector('.chat');

function generateLogs(type, player1, player2, valueHP = 0) {
    let text;
    let el;
    const date = new Date();
    const time = date.getHours() + ':' + date.getMinutes() + ':' + date.getSeconds();
    switch (type) {
        case  'hit':
            text = logs[type][getRandom(logs.hit.length) - 1].replace('[playerKick]', player2.name).replace('[playerDefence]', player1.name)
                + ' -' + valueHP + '.' + player1.name + ' ' + player1.hp + '/100';
            break;
        case 'defence':
            text = logs[type][getRandom(logs.defence.length) - 1].replace('[playerKick]', player1.name).replace('[playerDefence]', player2.name)
                + ' -' + valueHP + '.' + player2.name + ' ' + player2.hp + '/100';
            break;
        case 'start':
            text = logs[type].replace('[time]', time).replace('[player1]', player1.name).replace('[player2]', player2.name);
            break;
        case 'end':
            text = logs[type][getRandom(logs.end.length) - 1].replace('[playerWins]', player1.name).replace('[playerLose]', player2.name);
            break;
        case 'draw':
            text = logs[type];
            break;
        default:
            text = 'ничего не произошло';
            break;
    }
    console.log(text);
    el = `<p>${time} ${text}</p>`;
    $chat.insertAdjacentHTML('afterbegin', el);
}

export default generateLogs;