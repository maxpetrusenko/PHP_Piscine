let av = process.argv.slice(2).join().replace(/ /g,'').replace(/\s+/g, ",").split(',').sort()
for (let el = 0; el < av.length; el++){
    console.log(av[el])
}