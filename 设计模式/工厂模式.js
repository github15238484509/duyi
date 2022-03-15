// 建造者模式
;
(() => {
    function Human(param) {
        this.skill = param && param.skill || '保密'
        this.hobby = param && param.hobby || '保密'
    }
    Human.prototype.getSkill = function () {
        return this.skill
    }
    Human.prototype.getHobby = function () {
        return this.hobby
    }

    function Name(name) {
        this.name = name;
        (() => {
            if (name.indexOf(" ") > -1) {
                var names = name.split(" ")
                this.firstName = names[0]
                this.lastName = names[1]
            }
        })(name)
    }

    function Work(name) {
        ((work) => {
            this.work = work
            switch (work) {
                case 'code':
                    this.workDesc = '编写代码使你快乐'
                    break
                case 'ui':
                    this.workDesc = 'ui让前端快乐'
                    break
                default:
                    this.workDesc = '傻小子，你干的啥'
            }
        })(name)
    }
    Work.prototype.getWork = function () {
        return this.work
    }
    Work.prototype.getWorkDesc = function () {
        return this.workDesc
    }

    function Person(human, name, work) {
        var _preson = new Human(human)
        _preson.name = new Name(name)
        _preson.work = new Work(work)
        return _preson
    }
    var person = new Person({
        skill: 'code',
    }, 'code one', 'code1')
    // console.log(person);
})();
//惰性单例
(() => {
    var lazySingle = (function () {
        var _instance = null;

        function Single() {
            return {
                publicMethod: function () {},
                publicProperty: '10.0.0'
            }
        }
        return function () {
            if (!_instance) {
                _instance = Single()
            }
            return _instance;
        }
    })()
    //获取属性
    var version = lazySingle();
    var version2 = lazySingle();
    console.log(version===version2);
})()

