class Light {
    constructor() {
        this.state = null
    }
    setState(states) {
        this.state = states
    }
    getState() {
        return this.state.status
    }
    request() {
        this.state.handle()
    }
}

class LightStatus {
    constructor() {
        this.status = ''
    }
    handle() {
        throw '请设置handle处理函数'
    }
}

class onState extends LightStatus {
    constructor() {
        super()
        this.status = 'on'
    }
    handle() {
        console.log('打开灯看电视');
    }
}
class offState extends LightStatus {
    constructor() {
        super()
        this.status = 'off'
    }
    handle() {
        throw '灯坏了去他妈的'
    }
}

var light = new Light()
light.setState(new onState())
light.request()
light.setState(new offState())
light.request()