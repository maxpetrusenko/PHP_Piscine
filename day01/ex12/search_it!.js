let av = process.argv.slice(2)

for (let i = 1; i < av.length ; i++) {
    /* stupid edge case with only one value 42 */
    if ((av[i].search(av[0]) > -1 )&& (av[i].slice(av[i].indexOf("42")) > -1)) {
        console.log("42");
        break;
    }
    else if (av[i].search(av[0]) > -1)
        console.log(av[i].slice(av[i].indexOf(":")+1))
}
