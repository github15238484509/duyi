import Vnode from "./vnode/index.js"
import {
  vmodel
} from "./directive/vmodel.js"
import {
  preRender
} from "./render.js"
import {
  getAttributes,
  getAttributeValue,
  mergeAttr
} from "./utils/index.js"
import {
  Vfor
} from "./directive/vfor.js"

export default function mount(vm, elm) {
  vm._vnode = constructorVnode(vm, elm, null)
  preRender(vm, vm._vnode)
}

function constructorVnode(vm, elm, parent) {
  var vnode = null

  if (elm.nodeType === 1) {
    vnode = analysisAttr(vm, elm, parent)
  }
  if (!vnode) {
    var el = elm;
    var tag = elm.nodeName;
    var nodeType = elm.nodeType
    var children = []
    var text = getNodeText(elm)
    var data = ""
    vnode = new Vnode(el, tag, nodeType, children, parent, text, data);
  }
  if (elm.nodeType == 1 && elm.getAttribute("env")) {
    vnode.env = mergeAttr(vnode.env, JSON.parse(elm.getAttribute("env")));
  } else {
    vnode.env = mergeAttr(vnode.env, parent ? parent.env : {});
  }


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
  if (atts.indexOf('v-for') > -1) {
    return Vfor(vm, elm, parent, getAttributeValue(elm, 'v-for'))
  }
}