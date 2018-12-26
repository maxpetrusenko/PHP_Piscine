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

let av = process.argv
// console.log(av)
if (av.length == 5)
{
        if (av[3] == '+')
    {
        console.log(sum(av[2],av[4]))
    }
    else if (av[3] == '-')
    {
        console.log(minus(av[2],av[4]))
    }
    else if (av[3] == '*')
    {
        console.log(multiply(av[2],av[4]))
    }
    else if (av[3] == '/')
    {
        console.log(divide(av[2],av[4]))
    }
    else if (av[3] == '%')
    {
        console.log(modulo(av[2],av[4]))
    }
}
else {
    console.log("Incorrect Parameters")
}
