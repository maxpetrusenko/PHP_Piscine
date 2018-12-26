function sum(a,b) {
  return Number(a)+Number(b)
}
function minus(a,b) {
    return Number(a) - Number(b)
}
function multiply(a,b) {
    return Number(a) * Number(b)
}
function divide(a,b) {
    return Number(a) / Number(b)
}
function modulo(a,b) {
    return Number(a) % Number(b)
}

let av = process.argv.slice(2)

// console.log(av)
if (av.length == 1)
{   
    if (av[0].indexOf("+") > -1) {
        let sign = "+";
        let num1 = av.join().substring(0,av.join().indexOf(sign));
        let num2 = av.join().substring(av.join().indexOf(sign)+1,av.join().substring().length);
        let op = sum(num1,num2)
        console.log((isNaN(op) ? "Syntax Error" : op))
    }
    else if (av[0].indexOf("-") > -1) {
        let sign = "-";
        let num1 = av.join().substring(0,av.join().indexOf(sign));
        let num2 = av.join().substring(av.join().indexOf(sign)+1,av.join().substring().length);
        let op = minus(num1,num2)
        console.log((isNaN(op) ? "Syntax Error" : op))
    }
    else if (av[0].indexOf("*") > -1) {
        let sign = "*";
        let num1 = av.join().substring(0,av.join().indexOf(sign));
        let num2 = av.join().substring(av.join().indexOf(sign)+1,av.join().substring().length);
        let op = multiply(num1,num2)
        console.log((isNaN(op) ? "Syntax Error" : op))

    }
    else if (av[0].indexOf("/") > -1) {
        let sign = "/";
        let num1 = av.join().substring(0,av.join().indexOf(sign));
        let num2 = av.join().substring(av.join().indexOf(sign)+1,av.join().substring().length);
        let op = divide(num1,num2)
        console.log((isNaN(op) ? "Syntax Error" : op))
    }
    else if (av[0].indexOf("%") > -1) {
            let sign = "%";
            let num1 = av.join().substring(0,av.join().indexOf(sign));
            let num2 = av.join().substring(av.join().indexOf(sign)+1,av.join().substring().length);
            let op = minus(num1,num2)
            console.log((isNaN(op) ? "Syntax Error" : op))
    }


    /* get first number */
    //av.join().substring().length-1)
    /* get second number */
    //console.log(sum(av.join().substring(0,i-1),av.join().substring(i+1)))
}
else {
    console.log("Incorrect Parameters")
}
