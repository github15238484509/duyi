var arr:number[] = [1,3,3,4]

var arr_names:number[] = new Array(4)
for (let i = 0; i < arr_names.length; i++) {
    arr_names[i] = i;
}
console.log(arr_names)


var sites:string[] = new Array("Google","Runoob","Taobao","Facebook") 
 
for(var i = 0;i<sites.length;i++) { 
        console.log(sites[i]) 
}
console.group(sites,arr_names)


let myMap = new Map([
    ["key1", "value1"],
    ["key2", "value2"]
]); 
console.log(myMap)