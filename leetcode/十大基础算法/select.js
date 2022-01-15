var arr = [9, 5, 2, 7, 1, 3, 8, 5]

function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b]
    arr[b] = temp
}

function sort(arr) {

    for (let i = 0; i < arr.length; i++) {
        var maxindex = 0;
        for (let j = 0; j < arr.length - i; j++) {
            if (arr[maxindex] < arr[j]) {
                maxindex = j
            }
        }
        exchange(arr, maxindex, arr.length - 1 - i)
    }

}
sort(arr)
console.log(arr);
