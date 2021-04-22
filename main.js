class Player {
    constructor(props) {
        console.log(props);
        this.name = props.name;
        this.hp = props.hp;
        this.type = props.type;
    }
    whoop = () => {
        console.log(`${this.name} let's fight!`);
    }
}

const player1 = new Player({
    name: 'Scorpion',
    hp: 100,
    type: 'fighters',
});

console.log(player1);

class Player1 extends Player {
    constructor(props) {
        super(props);
        this.winners = props.winners;
    }

    whoop = () => {
        console.log('This is new WHOOP');
    }
}

const player2 = new Player1({
    name: 'Kitana',
    hp: 100,
    type: 'fighters',
    winners: true,
});

console.log(player2);
console.log(player2.whoop());