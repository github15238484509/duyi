export function preRender(vm, vnode) {
  if (vnode.nodeType === 3) {
    parseString(vnode)
  } else if (vnode.nodeType === 1) {
    var children = vnode.children
    for (let i = 0; i < children.length; i++) {
      preRender(vm, children[i])
    }
  }
}
var Template2Vnode = new Map()
var Vnode2Template = new Map()

export function renderMinix(Due) {
  Due.prototype._render = function () {
    rednerNode(this, this._vnode)
    console.log(Template2Vnode);
    console.log(Vnode2Template);
  }
}
export function renderData(vm, namespace) {
  console.log(Template2Vnode);
  console.log(Vnode2Template);
  // console.log(namespace);
  var resultList = getNameVnode(namespace)
  if (resultList) {
    for (let i = 0; i < resultList.length; i++) {
      rednerNode(vm, resultList[i])
    }
  }
}

function getNameVnode(name) {
  return Template2Vnode.get(name)
}

export function rednerNode(vm, vnode) {
  if (vnode.nodeType === 3) {
    var getVnodeList = Vnode2Template.get(vnode)
    if (getVnodeList) {
      var vnodeText = vnode.text
      for (let i = 0; i < getVnodeList.length; i++) {
        var objValue = getObjValue([vm._data], getVnodeList[i])
        console.log(objValue);
        if (objValue) {
          vnodeText = vnodeText.replace(`{{${getVnodeList[i]}}}`, objValue)
        }
      }
      vnode.elm.nodeValue = vnodeText
    }
  } else {
    for (let i = 0; i < vnode.children.length; i++) {
      rednerNode(vm, vnode.children[i])
    }
  }
}

function getObjValue(objs, name) {
  for (let i = 0; i < objs.length; i++) {
    var result = getValue(objs[i], name)
    if (result) {
      return result
    }
  }
  return null
}

function getValue(obj, name) {
  console.log(111, obj, name);
  if (/\[\d]/.test(name)) {
    var resultName = name.split("[")[0]
    var resultIndex = name.replace(/.+(\d).+/, "$1")
    if (name.split(".").length >= 2) {
      var reightName = name.split(".")
      reightName.shift()
      return getValue(obj[resultName][resultIndex], reightName.join())
    } else {
      return JSON.stringify(obj[resultName][resultIndex])
    }
  } else {
    var names = name.split(".")
    var result = obj
    for (let i = 0; i < names.length; i++) {
      if (result[names[i]]) {
        result = result[names[i]]
      } else {
        return null
      }
    }
    return result
  }
}



function parseString(vnode) {
  var parseList = vnode.text.match(/{{[a-zA-Z0-9_.\[\]]+}}/g)
  for (let i = 0; parseList && i < parseList.length; i++) {
    setTemplate2Vnode(sbuSting(parseList[i]), vnode)
    setVnode2Template(sbuSting(parseList[i]), vnode)
  }
}

function sbuSting(text) {
  if (text.substr(0, 2) === "{{" && text.substr(-2) === "}}") {
    return text.substring(2, text.length - 2)
  } else {
    return text
  }
}

function setTemplate2Vnode(name, vnode) {
  if (Template2Vnode.has(name)) {
    Template2Vnode.get(name).push(vnode)
  } else {
    Template2Vnode.set(name, [vnode])
  }
}

function setVnode2Template(name, vnode) {
  if (Vnode2Template.has(vnode)) {
    Vnode2Template.get(vnode).push(name)
  } else {
    Vnode2Template.set(vnode, [name])
  }
}