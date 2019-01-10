let av = process.argv.slice(2).join()
const fs = require('fs')
var result = document.getElementById("body").style.textTransform = "uppercase"

fs.writeFile(av, result, 'utf8', function (err) {
    if(err) return console.log(err)
})