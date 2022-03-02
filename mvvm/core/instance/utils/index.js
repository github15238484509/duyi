export function getAttributes(elm) {
    return elm.getAttributeNames()
}
export function getAttributeValue(elm, key) {
    return elm.getAttribute(key)
}


export function mergeAttr(...arg) {
    let result = {};
    for (let i = 0; i < arg.length; i++) {
        if (!(arg instanceof Object)) {
            continue
        }
        for (const key in arg[i]) {
            if (Object.hasOwnProperty.call(arg[i], key)) {
                if (result[key]) {
                    result[key] = mergeAttr(result[key], arg[i][key]);
                } else {
                    result[key] = arg[i][key];
                }
            }
        }
    }
    // console.log(result);
    return result || {}
}