
process.argv.slice(2).forEach(function (val) {
    if (process.argv.length == 3)   //take only 3rd argument
        console.log(val.replace(/^\s+|\s+$/g, "").replace(/\s+/g, " "));
  });
