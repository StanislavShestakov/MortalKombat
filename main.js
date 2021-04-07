const name = 'Fight...';
function getMessage(name, lastName){
    console.log(name + ' ' + lastName +' Fight....');
}
getMessage('Sonya', 'SubZero');
getMessage(name);


function  createFullName(name, lastName, secondName){
    console.log(33)
    const result = name + ' ' +secondName +' ' + lastName;
    return result;
    console.log(1)
}

const fullname = createFullName('Zar','Zakharov', 'Konstantinovich');
console.log(fullname);