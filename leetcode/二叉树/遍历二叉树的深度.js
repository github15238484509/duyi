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

function TreeDeep(root) {
    if (root == null) return 0
    var left = TreeDeep(root.left)
    var right = TreeDeep(root.right)
    var max = Math.max(left, right)
    return max + 1
}
// console.log(TreeDeep(a));

function judgeBalanceTree(root) {
    if (root == null) return true;
    var left = TreeDeep(root.left)
    var right = TreeDeep(root.right)
    if (Math.abs(left - right) > 1) { //不平衡
        return false;
    } else {
        return isBalance(root.left) && isBalance(root.right);
    }
}
console.log(judgeBalanceTree(a));