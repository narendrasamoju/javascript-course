


function add(a,b){ 
    console.log("sum")
}


function add1(c,d){
    console.log("sum1")
}

function num(a,b,add,add1){
    console.log(a+b);
    add1();
    add();
}
let a=4,b=6;
num(a,b,add,add1)