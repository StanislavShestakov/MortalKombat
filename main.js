const sum = (a,b) => a+b;
const sum1 = (a,b) => {
    console.log('Function Sum');
   return  a+b;
};

console.log(sum(5,2));
console.log(sum1(5,2));

const random =(num) => Math.ceil(Math.random()*num);
console.log(random(100));
//-------------------------------------------------------------

console.log('------------------------------------------');

const obj1 = {
    name:'Stas',
    fn: function (){
        console.log(this);
    }
}

const obj2 = {
    name:'Stas Shestakov',
    fn: () => console.log(this),
}
const obj3 = {
    name:'Stas Shestakov',
    fn: function (){
        const a = () => console.log(this);
        a();
    }

}

obj1.fn();
obj2.fn();
obj3.fn();

const copy1 = obj1.fn;
const copy2 = obj2.fn;
const copy3 = obj3.fn;
const copy4 = obj3.fn.bind(obj3);


copy1();
copy2();
copy3();
copy4();