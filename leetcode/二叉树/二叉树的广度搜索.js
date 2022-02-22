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


function f1(rootlist, target) {
    if (rootlist === null || rootlist.length==0) return false;
    var currentlist = []
    for (let i = 0; i < rootlist.length; i++) {
        if (rootlist[i].value == target) {
            return true
        }else{
            if(rootlist[i].left){
                currentlist.push(rootlist[i].left)
            }
            if(rootlist[i].right){
                currentlist.push(rootlist[i].right)
            }
        }
    }
    console.log(currentlist);
    return f1(currentlist, target)
}

console.log(f1([a], "78"));