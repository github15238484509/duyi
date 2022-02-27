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

function parseString(vnode) {
  var parseList = vnode.text.match(/{{[a-zA-Z0-9_]+}}/g)
  for (let i = 0; parseList && i < parseList.length; i++) {
    setTemplate2Vnode(sbuSting(parseList[i]), vnode)
    setVnode2Template(sbuSting(parseList[i]), vnode)
  }
}

function sbuSting(text) {
  if (text.substr(0, 2) === "{{" && text.substr(-2) === "}}") {
    return text.substring(2,text.length - 2)
  } else {
    return text
  }
}
var Template2Vnode = new Map()
var Vnode2Template = new Map()
function setTemplate2Vnode(name, vnode) {
  if(Template2Vnode.has(name)){
    Template2Vnode.get(name).push(vnode)
  }else{
    Template2Vnode.set(name,[vnode])
  } 
}

function setVnode2Template(name, vnode) {
  if(Vnode2Template.has(vnode)){
    Vnode2Template.get(vnode).push(name)
  }else{
    Vnode2Template.set(vnode,[name])
  } 
}