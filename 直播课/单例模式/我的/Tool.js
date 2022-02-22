var Tool = {
    inherit: function (target, origin) {
        function F(originConstructor) {
            this.originConstructor = originConstructor
        }
        F.prototype = origin.prototype
        target.prototype = new F(target)
        // target.prototype.originConstructor = target
    },
    extends: function (origin) {
        var result = function (...arg) {
            origin.apply(this, arg)
        }
        this.inherit(result, origin)
        return result
    },
    signal: function (F) {
        return (() => {
            var signal = null
            return function (...arg) {
                if (signal !== null) {
                    return signal
                }
                signal = new F(...arg)
                return signal
            }
        })()
    }
}



// function Target(name) {}

// function Origin(name) {
//     this.name = name
// }
// Origin.prototype.say = function () {
//     console.log("this is rogin");
// }
// var Target = Tool.extends(Origin)
// console.log(Target);

// var target = new Target("target")
// console.log(target);
// Tool.inherit(Target, Origin)
// var target = new Target("target")
// var origin = new Origin("origin")

// var adfasfd = Tool.signal(Origin)
// var a = new adfasfd("15")
// var a2 = new adfasfd("asdf15")