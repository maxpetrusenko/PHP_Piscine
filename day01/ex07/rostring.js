let av = process.argv.slice(2)
for (let el = 0; el < av.length; el++) {
    if (av) {
        av[el] = av[el].split(" ")
        let a = av[el].shift()
        let x = av[el].push(a)
        av[el] = av[el].join().replace(/,/g, " ")
    }
}
console.log(av[0])

