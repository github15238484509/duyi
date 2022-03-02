import {
    getValue
} from "../render.js";
import Vnode from "../vnode/index.js"
export function Vfor(vm, elm, parent, keyValue) {
    var tempVnode = new Vnode(elm, elm.tagName, 0, [], parent, '', '')

    var key = analysisAttrValue(vm._data, keyValue)
    var dataList = getValue(vm._data, key[2])

    if (!dataList) {
        throw "error"
    }
    parent.elm.removeChild(elm)
    var tempList = []
    for (let i = 0; i < dataList.length; i++) {
        var temp1 = document.createElement(elm.tagName)
        temp1.innerHTML = elm.innerHTML
        var env = {
            [key[0]]: getEnumerableValue(dataList[i])
        }
        temp1.setAttribute("env", JSON.stringify(env))
        tempList.push(temp1)
        parent.elm.appendChild(temp1)
    }
    parent.elm.appendChild(document.createTextNode(""))




    return tempVnode
}

function analysisAttrValue(data, keyValue) {
    var keys = keyValue.trim().split(" ")
    if (keys[1] == "in" || keys[1] == "of" || keys.length >= 2) {
        return keys
    } else {
        throw "error"
    }
}

function getEnumerableValue(obj) {
    if (!(obj instanceof Object)) {
        return obj
    }
    var data = {}
    var names = Object.getOwnPropertyNames(obj)
    for (let i = 0; i < names.length; i++) {
        if (obj[names[i]] instanceof Object) {
            data[names[i]] = getEnumerableValue(obj[names[i]]);
        } else {
            data[names[i]] = obj[names[i]]
        }
    }
    return data
}