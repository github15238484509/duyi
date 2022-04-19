type CallBack1<T, U> = (key: T, value: U) => void;
class MyMap<k, V>{
  private keys: k[] = [];
  private Values: V[] = [];
  set(key: k, value: V) {
    let i = this.keys.indexOf(key)
    if (i === -1) {
      this.keys.push(key)
      this.Values.push(value)
    } else {
      this.Values[i] = value
    }
  }
  forEach(call: CallBack1<k, V>) {
    this.keys.forEach((k, i) => {
      let v = this.Values[i]
      call(k, v)
    })
  }
  has(key:k) {
      return this.keys.includes(key)
  }
  delete(key:k) {
    let i = this.keys.indexOf(key)
    if(i===-1){
      return
    }
    this.keys.splice(i,1)
    this.Values.splice(i,1)
  }
  get size(){
   return this.keys.length
  }
  get(key:k):V|undefined {
    let i = this.keys.indexOf(key)
    if(i===-1){
      return
    }
    return this.Values[i]
  }
}

let mymap = new MyMap<string, number>()
mymap.set("a", 123)
mymap.set("b", 123)
mymap.set("a", 13)
mymap.forEach((A, B) => {
    console.log(A,B);
})
mymap.delete("a")
mymap.has("4")
mymap.size
mymap.get("sss")