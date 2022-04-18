import { log } from "console"

enum genderType{
  male='male',
  female="female"
}
class Person {
  name: string
  readonly pid: string
  private id?:number=Math.random()
  sayName(str:string):string{
    return this.name + str + this.id
  }
  constructor(name: string, public age: number, readonly gender:genderType=genderType.male) {
    this.name = name
    this.pid = String(Math.random())
  }
}

let person = new Person('xl', 12)
console.log(person);
person.age = 15
log(person.sayName('12'))
