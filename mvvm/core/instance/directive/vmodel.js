import {
  getValue,
  setValue
} from "../render.js"
export function vmodel(vm, elm) {
  if (elm.nodeType === 1) {
    var arrributes = elm.getAttributeNames()
    if (arrributes.indexOf("vmodel") > -1) {
      elm.oninput = function () {
        setValue(vm,elm.getAttribute("vmodel"),elm.value)
      }
    }
  }
}