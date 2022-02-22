var arr = [1, 2, 3, 4, 5, 6, 7]
function traverse(arr, index) {
    if (arr===null||arr.length <= index) {
        return
    } else {
        console.log(arr[index]);
        return traverse(arr, index + 1)
    }
}
traverse(arr, 0)