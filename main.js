// function  sum(a,b){
//     return a+b;
// }

const sum =function (a =0,b=0){
    return a+b;
}

console.log(sum(4,2));

const calc =sum;

console.log(calc(4,2));
console.log(calc());

const a = {
    name: 'Zar',
};

(function (){
    console.log(this)
}).call(a);
