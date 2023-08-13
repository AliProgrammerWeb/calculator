function output(value){
    document.getElementById("output").value += value;
}
function reset() {
    document.getElementById("output").value = ""; 
}
function calculate(){
    var z = document.getElementById("output").value;
    console.log(z);
    var x = z.split(/[/*-+]/);
    var y = z.match(/[/*-+]/);
    console.log(y);
    if (y!==null)
    {
        var r = parseFloat(x[0]);
        var e = parseFloat(x[1]);
        var output=calc(r,e,y[0]);
        document.getElementById("output").value = output;
        console.log(output)
    }
    else
    {
        document.getElementById("output").value = 'error';
    }
}

function calc(x,y,z){
    var c;
    switch(z){
        case '+': c = x+y;
        break;
        case '-': c = x-y;
        break;
        case '*': c = x*y;
        break;
        case '/': c = x/y;
        break;
    }
    return c;
}
let car = {name:'pride',model:'1399',color:'white'};
let names=['ali','reza','mahamad']
let cars = '';
// for (const key in car) {
    
//     cars += car[key] + ' ';
// }
names.forEach(f23('a','3','e'));

function f23(a,b,c){
    cars += a + ' ';
}
console.log(cars);




