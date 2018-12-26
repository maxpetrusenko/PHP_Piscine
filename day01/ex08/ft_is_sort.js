// let a = [1, 3 ,5, 2, 8, 4]
// let b = [ 1, 2, 3, 4, 5, 8 ]

function ft_is_sort(str) {
    for (var i = 0; i < str.length; i++) {
        if (str[i] > str[i+1]){
            return 0;
        }
    }
    return 1;
}

// if (ft_is_sort(a))
//     console.log ("The array is sorted")
// else
//     console.log ("The array is not sorted")