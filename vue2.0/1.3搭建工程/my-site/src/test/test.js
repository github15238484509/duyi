const EventBtn = require("./EventBtn")
function  aa (){
    console.log(5555);
}
EventBtn.$on("say",aa)

EventBtn.$on("say",function(){
    console.log(55555555);
})
EventBtn.$on("say1",function(){
    console.log('say1');
})
EventBtn.$emit("say")
EventBtn.$off("say",aa)
EventBtn.$emit("say")
EventBtn.$emit("say1")
