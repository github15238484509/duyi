function Node(value) {
    this.value = value
    this.next = null
}
var a = new Node("a")
var b = new Node("b")
var c = new Node("c")
var d = new Node("d")
var e = new Node("e")
var f = new Node("f")

function bindNode(...arg) {
    for (let i = 0; i < arg.length - 1; i++) {
        var cur = arg[i]
        cur.next = arg[i + 1]
    }
}
bindNode(a, b, c, d, e, f)

function reverse(node) {
    if (node === null || node.next === null) {
        return node;
    }
    if (node.next.next === null) {
        node.next.next = node
        var last = node.next//返回最后一位
        node.next = null//吧最后一位的上一位设置成空
        return last
    } else {
        var result = reverse(node.next)//result 一直为最后一位
        node.next.next = node// 这句话对应最后一次循环    吧倒数第二位的next的指向倒数三位
        node.next = null// 这句话对应最后一次循环    吧 倒数第三为的next 指向null
        return result
    }
}
console.log(reverse(a));