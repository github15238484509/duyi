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
var f2 = new Node("2")
var f3 = new Node("23")

a2.left = b2
a2.right = c2
c2.left = d2
c2.right = e2
b2.left = f2
f2.left = f3

function diff(newroot, oldroot, defflist) {
    if (newroot === oldroot) return defflist;

    if (newroot === null && oldroot !== null) {
        defflist.push({
            type: '新增',
            origin: newroot,
            newOrigin: oldroot
        })
    } else if (newroot !== null && oldroot === null) {
        defflist.push({
            type: '删除',
            origin: newroot,
            newOrigin: oldroot
        })
    } else if (newroot.value !== oldroot.value) {
        defflist.push({
            type: '修改',
            origin: newroot,
            newOrigin: oldroot
        })
        diff(newroot.left, oldroot.left, defflist)
        diff(newroot.right, oldroot.right, defflist)
    } else {
        diff(newroot.left, oldroot.left, defflist)
        diff(newroot.right, oldroot.right, defflist)
    }

    return defflist
}
console.log(diff(a1, a2, []));