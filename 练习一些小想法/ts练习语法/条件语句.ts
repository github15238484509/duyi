var condition:string = ""
if(condition){
    console.log('condition:true:',condition);
} else{
    console.log('condition:false:',condition)
}

console.log('switch...case')
condition = "132"
switch(condition){
    case "" :{
        console.log("","condition")
    }
    case "132123" :{
        console.log("condition:1",condition)
    }
    case "132" :{
        console.log("condition:",condition)

    }
    case "132123" :{
        console.log("condition:2",condition)
    }
}