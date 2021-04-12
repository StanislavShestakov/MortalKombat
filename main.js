const person = {
    name: 'Scorpion',
    greet: function (){
        return 'Hi, my name is ' + person.name;
    }
}

console.log(person.greet());


const player = {
    name: 'Slim Shady',
    greet: function (){
        return 'Hi, my name is ' + this.name;
    }
}

console.log(player.greet());


function  greet(){
    return 'Hi, my name is ' + this.name;
}
const enemy = {
    name: 'Sub-Zero',
    greet: greet
}

console.log(enemy.greet());


function greet1(){
    return 'Hi, my name is ' + this;
}

const enemy1 = {
    name: 'Sub-Zero',
    greet: greet1
}

console.log(enemy1.greet());
console.log(greet1());
console.log(this);
console.log(enemy.greet.call(player));

function greet2(greet){
    return  greet + ' Hi, my name is ' + this.name;
}
const enemy2 = {
    name: 'Sub-Zero',
    greet: greet2
}
console.log(enemy2.greet.call(player,'Hello'));
console.log(enemy2.greet.apply(player,['Hey']));

const person1 ={
    name: 'Zar',
}

const player1 = {
    name: 'Scorpion',
    greet: greet2.bind(person1)
}


console.log(player1.greet);
