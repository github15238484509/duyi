function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var a = new Node("a")
var b = new Node("b")
var c = new Node("c")
var d = new Node("d")
var e = new Node("e")
var f = new Node("f")


a.left = b
a.right = c
c.left = d
c.right = e
b.left = f

// console.log(a);

function f1(root, target) {
    if (root === null) return false;
    if (root.value == target) return true;
    var left = f1(root.left, target)
    if (left) {
        return left
    }
    var right = f1(root.right, target)
    if (right) {
        return right
    }
    return false
}

function f12(root, target) {
    if (root === null) return false;
    if (root.value == target) return true;
    var left = f1(root.left, target)
    var right = f1(root.right, target)
    return left || right
}
// console.time("f12");
// console.log(f12(a, "a"));
// console.timeEnd("f12")
console.time("f1");
console.log(f1(a, "a"));
console.timeEnd("f1")
