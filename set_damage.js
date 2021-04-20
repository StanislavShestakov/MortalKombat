function setDamage(playerArr, enemyArr, player,player1,player2) {
    if (player === player1) {
        if (playerArr.hit !== enemyArr.defence) {
            player2.changeHP(playerArr.value);
            generateLogs('hit', player2, player1, playerArr.value);
        } else {
            generateLogs('defence', player1, player2);
        }
    }
    if (player === player2) {
        if (enemyArr.hit !== playerArr.defence) {
            player1.changeHP(enemyArr.value);
            generateLogs('hit', player1, player2, enemyArr.value);
        } else {
            generateLogs('defence', player2, player1);
        }
    }
}
export default setDamage;
