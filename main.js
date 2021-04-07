const player1 = {
    name:'Scorpion',
    hp: 100,
    'string': true,
    100: true,
    attack: function(){
        console.log('Fight....');
    }
};
player1.attack();

console.log(player1);
console.log(player1.name);
console.log(player1['hp']);
console.log(player1['string']);

const  count = 100;
console.log(player1[count]);


player1.weapon = 'Kunai';
console.log(player1);

player1.hp = player1.hp-20;
console.log(player1.hp);

delete  player1.hp;
console.log(player1);