function changeHP(amount, player) {
    player.hp -= amount;

    if (player.hp <= 0) {
        player.hp = 0;
    }
}
export default changeHP;