const template = `
  <button @click="num++">当前的数字为{{num}}点击我</button>
`
export default {
    data() {
        return {
            num: 0
        }
    },
    template
}