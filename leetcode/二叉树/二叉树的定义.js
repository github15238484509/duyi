function TowTree(value) {
    this.value = value
    this.left = null
    this.right = null
}

var a = new TowTree("a")
var b = new TowTree("b")
var c = new TowTree("c")
var d = new TowTree("d")
var e = new TowTree("e")
var f = new TowTree("f")
a.left = b;
a.right = c;
b.left = d;
b.right = e;
c.left = f;
console.log(a);
var count = 0
function traverseTree(tree) {
    if (tree === null) return;
    count++
    if (tree.left !== null) {
        traverseTree(tree.left)
    }
    console.log(tree.value);

    if (tree.right !== null) {
        traverseTree(tree.right)
    }
}
traverseTree(a)
console.log(count);