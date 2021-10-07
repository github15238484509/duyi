module.exports = function(source) {
    console.log(source);
    let result = ` (()=>{
      let style = document.createElement("style");
      style.innerHTML = \`${source}\`;
      document.head.appendChild(style)
    })()`
    console.log(result);

    return result
}