interface Person{
  name:string
  say(name:string):string
  age:number
  say2:(age:number)=>string
}
enum Sex{
  male = '男',
  female="女"
}
interface Person2 extends Person{
      sex:Sex
}

let p:Person2 = {
  name:'yyds',
  age:12,
  say:()=>{return "3"},
  sex:Sex.female,
  say2:function(){return "4156"}
}