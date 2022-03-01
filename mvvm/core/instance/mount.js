import Vnode from "./vnode/index.js"
import {
  vmodel
} from "./directive/vmodel.js"
import {
  preRender
} from "./render.js"
import {
  getAttributes
} from "./utils/index.js"

export default function mount(vm, elm) {
  vm._vnode = constructorVnode(vm, elm, null)
  preRender(vm, vm._vnode)
}

function constructorVnode(vm, elm, parent) {
  if (elm.nodeType === 1) {
    analysisAttr(vm, elm, parent)
  }
  var vnode = null
  var el = elm;
  var tag = elm.nodeName;
  var nodeType = elm.nodeType
  var children = []
  var text = getNodeText(elm)
  var data = ""
  vnode = new Vnode(el, tag, nodeType, children, parent, text, data);
  var childernList = elm.childNodes;
  for (let i = 0; i < childernList.length; i++) {
    var chilVnode = constructorVnode(vm, childernList[i], vnode);
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

function analysisAttr(vm, elm, parent) {
  var atts = getAttributes(elm)
  if (atts.indexOf("vmodel") > -1) {
    vmodel(vm, elm)
  }
}