import Vnode from "./vnode/index.js"
export default function mount(vm, elm) {
  vm._vnode = constructorVnode(vm, elm, null)

}

function constructorVnode(vm, elm, parent) {
  var vnode = null
  var el = elm;
  var tag = elm.nodeName;
  var nodeType = elm.nodeType
  var children = []
  var text = getNodeText(elm)
  var data = ""
  console.log(tag, elm);
  vnode = new Vnode(el, tag, nodeType, children, parent, text, data);
  var childernList = elm.childNodes
  for (let i = 0; i < childernList.length; i++) {
    var chilVnode = constructorVnode(vm, childernList[i], elm);
    if (chilVnode instanceof constructorVnode) {
      vnode.children.push(chilVnode)
    } else {
      vnode.children = vnode.children.concat(chilVnode)
    }
  }
  return vnode
}

function getNodeText(dom) {
  if (dom.nodeType === 3) {
    return dom.nodeValue
  } else {
    return ""
  }
}