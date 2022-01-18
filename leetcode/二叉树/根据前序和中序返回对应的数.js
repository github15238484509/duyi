function Node(value) {
    this.value = value
    this.left = null
    this.right = null
}
var zhong = `dbeafc`.split("");
var qian = "abdecf".split("");
var hou = "debfca".split("");

function qianzhong(qian, zhong) {
    if (qian == null || zhong == null || qian.length === 0 || zhong.length === 0 || qian.length !== zhong.length) return null;
    var root = new Node(qian[0]);
    var index = zhong.indexOf(root.value);
    var zhongLeft = zhong.slice(0, index);
    var zhongRight = zhong.slice(index + 1);

    var qianLeft = qian.slice(1, index + 1);
    var qianRight = qian.slice(index + 1);

    root.left = qianzhong(qianLeft, zhongLeft)
    root.right = qianzhong(qianRight, zhongRight)
    return root
}
// console.log(qianzhong(qian, zhong));

function bianlitree(root) {
    if (root === null) return null;
    bianlitree(root.left)
    bianlitree(root.right)
    console.log(root.value);
}
// bianlitree(qianzhong(qian, zhong))

var zhong = `dbeafc`.split("");
var qian = "abdecf".split("");
var hou = "debfca".split("");

function zhonghou(zhong, hou) {
    if (zhong === null || hou === null || zhong.length === 0 || hou.length === 0 || zhong.length !== hou.length) return null;
    var root = new Node(hou[hou.length - 1])
    var index = zhong.indexOf(root.value)
    var zhongleft = zhong.slice(0, index);
    var zhongright = zhong.slice(index + 1);
    var houleft = hou.slice(0, index);
    var houright = hou.slice(index, hou.length - 1);
    root.left = zhonghou(zhongleft, houleft)
    root.right = zhonghou(zhongright, houright)
    return root
}
console.log(bianlitree(zhonghou(zhong, hou)));