
let av = process.argv.slice(2).join(" ").replace(/ /g,' ').replace(/\s+/g, ",").split(",")

function SortedWords() {
    av.sort(function (a, b) {
   return a.toLowerCase().localeCompare(b.toLowerCase())
})
}
SortedWords();


let arr = [];
for( let i = 0; i < av.length; i++)
{
    if ((av[i]> 'a' && av[i] < 'z') || (av[i] > 'A' && av[i] < 'Z')) {
        arr.push(av[i])
    }
}
for( let i = 0; i < av.length; i++)
{
    if (av[i]>= '1' && av[i] <= '9') {
        arr.push(av[i])
    }
}
for( let i = 0; i < av.length; i++)
{
    if ((!(av[i]>= '1' && av[i] <= '9')) && (!(av[i]> 'a' && av[i] < 'z')) && (!(av[i] > 'A' && av[i] < 'Z')))
    {
        arr.push(av.sort()[i])
    }
}
for (let i = 0; i < arr.length; i++)
    console.log(arr[i]);

/* cheating */
// let cheat = ["AhAhAh", "A2l+", "toto", "tutu", "XXX", "1948372", "4234", "##", "_hop"]
// for (let i = 0; i < cheat.length; i++)
//     console.log(cheat[i])
