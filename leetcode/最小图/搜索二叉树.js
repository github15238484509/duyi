function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var arr = []
for (let i = 0; i < 10000; i++) {
    arr.push(Math.floor(Math.random() * 10000));
}

function link(root, value) {
    if (root.value === value) {
        return
    } else if (root.value < value) {
        if (root.right === null) {
            root.right = new Node(value)
        } else {
            link(root.right, value)
        }
    } else if (root.value > value) {
        if (root.left === null) {
            root.left = new Node(value)
        } else {
            link(root.left, value)
        }
    }
}

function searchTree(arr) {
    if (arr.lenght === 0) return null;
    var root = new Node(arr[0])
    for (let i = 1; i < arr.length; i++) {
        link(root, arr[i])
    }
    return root
}

searchTree(arr)


var num = 0

function searchvalue(arr, value) {
    for (let i = 0; i < arr.length; i++) {
        num++
        if (arr[i] === value) return true
    }
    return false
}
console.log(searchvalue(arr, 1000), num);

var num1 = 0

function searchvalue1(root, value) {
    if (root == null) return false;
    num1++
    if (root.value === value) return true;
    if (root.value < value) {
        return searchvalue1(root.right, value)
    } else return searchvalue1(root.left, value)
}
console.log(searchvalue1(searchTree(arr), 1000), num1);