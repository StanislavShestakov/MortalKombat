var i = 5;

function  fn(){
    var i = 10;
    console.log(i)
    function moreFunc(){
        console.log(i);
        var i =15;
        console.log(i);
    }
    moreFunc();
    console.log(i)
}

fn();