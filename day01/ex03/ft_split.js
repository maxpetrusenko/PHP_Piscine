function ft_split(str)
{
    console.log("Array")
    console.log("(")
    str = str.replace(/\s+/g,' ');
    str = str.split(" ");
    str = str.sort();
    for (let word = 0; word < str.length; word++)
        console.log(`[${word}] => ${str[word]}`);
    console.log(")")
}