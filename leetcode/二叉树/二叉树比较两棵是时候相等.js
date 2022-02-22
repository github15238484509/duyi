function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}

var a1 = new Node("a")
var b1 = new Node("b")
var c1 = new Node("c")
var d1 = new Node("d")
var e1 = new Node("e")
var f1 = new Node("f")

a1.left = b1
a1.right = c1
c1.left = d1
c1.right = e1
b1.left = f1


var a2 = new Node("a")
var b2 = new Node("b")
var c2 = new Node("c")
var d2 = new Node("d")
var e2 = new Node("e")
var f2 = new Node("f")

a2.left = b2
a2.right = c2
c2.left = d2
c2.right = e2
b2.left = f2

function compareRoot(originRoot, targetRoot) {
    if (originRoot === targetRoot) return true;
    if (originRoot === null && targetRoot !== null || originRoot !== null && targetRoot === null) return false
    if (originRoot.value !== targetRoot.value) return false
    var left = compareRoot(originRoot.left, targetRoot.left)
    var right = compareRoot(originRoot.right, targetRoot.right)
    return left && right
}

function compareRoot(originRoot, targetRoot) {
    if (originRoot === targetRoot) return true;
    if (originRoot === null && targetRoot !== null || originRoot !== null && targetRoot === null) return false

    if (originRoot.value !== targetRoot.value) return false
    var left = compareRoot(originRoot.left, targetRoot.left) || compareRoot(originRoot.left, targetRoot.right)
    var right = compareRoot(originRoot.right, targetRoot.right) || compareRoot(originRoot.right, targetRoot.left)
    return left && right
}
console.log(compareRoot(a1, a2));