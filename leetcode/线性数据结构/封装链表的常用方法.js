/**
 * 
 * @param {*} value 节点的值 
 */
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

/**
 * 
 * @param  {...any} arg 节点列表为数组
 */
function bindNode(...arg) {
    for (let i = 0; i < arg.length - 1; i++) {
        var cur = arg[i]
        cur.next = arg[i + 1]
    }
}
bindNode(a, b, c, d, e, f)
// console.log(a);
/**
 * 
 * @param {node} node 一个节点 
 * @param {node} target 被添加的节点
 */
function addEndNode(node, target) {
    var currentNode = node
    while (currentNode.next) {
        currentNode = currentNode.next
    }
    currentNode.next = target
}
var target = new Node("target")
// addEndNode(a, target)
// console.log(a);


/**
 * 
 * @param {node} node 
 * @param {node} target 
 * @param {Number} index 节点被添加的位置 默认值为最后  一位大于等于1
 */
function addNode(node, target, index) {
    index = index || Infinity
    var currentNode = node
    index = index - 1 //可用可不用
    while (currentNode.next && index) {
        index = index - 1
        currentNode = currentNode.next
    }
    target.next = currentNode.next
    currentNode.next = target
}
// addNode(a, target)
// console.log(a);

/**
 * 
 * @param {node} node 
 * @param {number} index 移除的第几项  从0开始
 */
function removeNode(node, index) {
    var currentNode = node;
    var previousNode = null;
    if (index == 0) {
        currentNode.next = null
        return
    }
    while (currentNode.next && index) {
        index--
        previousNode = currentNode
        currentNode = currentNode.next
    }
    if (!currentNode.next) {
        previousNode.next = null
    } else {
        previousNode.next = currentNode.next
    }
}
// removeNode(a, 5)
// console.log(a);

/**
 * 
 * @param {node} node 节点列表 
 * @param {any} value 节点值值
 * @param {number} index 当前的索引值 从0开始
 */
function editNode(node, value, index) {
    var currentNode = node;
    while (currentNode.next && index) {
        index--
        currentNode = currentNode.next
    }
    currentNode.value = value
}
editNode(a, "123", 10000)
console.log(a);

/**
 * 
 * @param {node} node 要反转的节点
 */
function reverse(node) {
    if (!node || !node.next) {
        return
    }
    if (node.next.next === null) { //node.next 倒数最后一个
        node.next.next = node
        return node.next
    } else {                    4
        var result = reverse(node.next)
        node.next.next = node
        node.next = null
        return result
    }
}
console.log(reverse(a));