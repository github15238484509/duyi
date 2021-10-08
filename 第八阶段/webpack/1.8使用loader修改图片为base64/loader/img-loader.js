function loader(source) {
    const result = base64(source)
    return `module.exports = \`${result}\``
}
loader.raw = true

function base64(buffer) {
    const result = 'data:image/png;base64,' + buffer.toString("base64")
    return result
}
module.exports = loader