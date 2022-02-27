import initMinxix from "./init.js"
import {renderMinix} from "./render.js"
function Due(option) {
  this._init(option)
  this._render()
}
initMinxix(Due)
renderMinix(Due)
export default Due