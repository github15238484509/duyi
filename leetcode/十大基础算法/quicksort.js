function sort(arr) {
    if (arr === null || arr.length === 0) return [];
    var max = arr[0]
    var left = []
    var right = []
    for (let i = 1; i < arr.length; i++) {
        if (max > arr[i]) left.push(arr[i])
        else right.push(arr[i])
    }
    left = sort(left)
    right = sort(right)
    left.push(max)
    return left.concat(right)
}

// console.log(sort(arr));
function exchange(arr, a, b) {
    var temp = arr[a];
    arr[a] = arr[b];
    arr[b] = temp
}

var arr = [5, 1, 6, 9, 11, 2, 8, 88, 2, 7, 10];

function sort2(arr, beigin, end) {
    if (arr === null || beigin >= end) return;
    var left = beigin;
    var right = end
    do {
        do {
            left++
        } while (arr[left] < arr[beigin])
        do {
            right--
        } while (arr[beigin] < arr[right])
        left < right ? exchange(arr, left, right) : ''
    } while (left < right)
    var temp = left
    left = right;
    right = temp
    exchange(arr, beigin, left)
    sort2(arr, beigin, left)
    sort2(arr, right, end)
}
// sort2(arr, 0, arr.length)

var arr = [5, 1, 6, 9, 11, 2,6, 8, 88, 2, 7, 10];

function sort3(arr, begin, end) {
    if (arr.length === 0 || begin >= end) return;

    var left = begin + 1;
    var right = end - 1
    while (left < right) {
        while (arr[begin] > arr[left]) {
            left++
        }
        while (arr[begin] < arr[right]) {
            right--
        }
        if (left < right) {
            exchange(arr, left, right)
        }
    }
    exchange(arr, begin, right)
    sort3(arr, begin, right)
    sort3(arr, right + 1, end)
}
sort3(arr, 0, arr.length)

console.log(arr);