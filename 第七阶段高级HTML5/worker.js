this.onmessage = function(e) {
    console.log(e.data);
    this.postMessage(e.data * 2)
}