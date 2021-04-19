const player = {
    name: 'Stas',
    type: 'padavan',
    weapon: ['JS','Layout HTML'],
    hp:{
        current: 1000,
        total: 880,
    }
}
const player2 = {
    name: 'Stas',
    type: 'padavan',
    weapon: ['JS','Layout HTML'],
    hp:{
        current: 1000,
        total: 880,
    }
}

//const{name,type,weapon:[one,two,tree], hp:{current,total},type1=333} =  player;
//console.log(name,type, weapon, current,type1);

const{name, ...rest} =  player;
const{name:namePlayer2, ...restPlayer2} =  player2;
console.log(name,rest);
console.log(namePlayer2,restPlayer2);