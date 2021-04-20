const character = {
    name: 'Scorpion',
    hp: 100,
    weapon: ['hands'],
    type: 'fighters',

}

character.whoop = function (){
    console.log(`${this.name} let's fight!`);
}
//console.log(character.kick());
Object.prototype.kick = function (){
    console.log('Kick Again');
}

const kitana =Object.create(character);
kitana.name = 'Kitana';
Object.prototype.toString = function (){
    return 'Это Объект!..';
}