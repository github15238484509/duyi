var Encapsulate = /** @class */ (function () {
    function Encapsulate() {
        this.str1 = "hello";
        this.str2 = "world";
    }
    return Encapsulate;
}());
var obj = new Encapsulate();
console.log(obj.str1);
console.log(obj.str2);
