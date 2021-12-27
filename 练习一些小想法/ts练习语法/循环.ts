var num: number = 1;
var i: number = 6;
var factorial = 1;

for (; i >= 1; i--) {
    factorial *= i;
}
console.log(factorial)

var n: any = "abcdef"
for (const key in n) {
    if (Object.prototype.hasOwnProperty.call(n, key)) {
       console.log(n[key])
    }
}

const someArray = [1, "string", false];
for (let entry of someArray) {
    console.log(entry); // 1, "string", false
}

someArray.forEach(ele => {
    console.log(ele)
});

someArray.every((val)=>{
    return true
})

function sayName (name):string{
    console.log(name)
    return name
}
sayName("你好")
function disp(s1:string):void; 
function disp(n1:number,s1:string):void; 
function disp(x:any,y?:any):void { 
    console.log(x); 
    console.log(y); 
} 
disp("abc") 
disp(1,"xyz")


