export default class ConstructionVnode {
  constructor(elm, tag, nodeType, children, parent, text, data) {
    this.elm = elm
    this.tag = tag
    this.nodeType = nodeType
    this.children = children
    this.parent = parent
    this.text = text
    this.data = data //预留字段
    this.env = {}
    this.instructions = null;
    this.template = [];
  }
}