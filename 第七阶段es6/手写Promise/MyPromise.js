//promise以 .then .then 异步resolve 失败告终 
const MyPromise = (function() {
    const PENDING = "pending";
    const RESOLVE = "resolved";
    const REJECT = "rejected";

    const STATUS = Symbol("status"); //promise的状态
    const VALUE = Symbol("value"); //promise的值
    const changeStatus = Symbol("changeStatus"); //改变promise的的状态
    const success = Symbol("success"); //成功的队列
    const fail = Symbol("fail"); //失败的队列
    return class MyPromise {
        constructor(execution) {
                this[STATUS] = PENDING
                this[VALUE] = undefined
                this[success] = []
                this[fail] = []
                const resolve = (data) => {
                    this[changeStatus](RESOLVE, data)
                        //这一句主要是为了execution中异步执行resolve
                    for (let i = 0; i < this[success].length; i++) {
                        this[success][i](data)
                    }
                }
                const reject = (reason) => {
                    this[changeStatus](REJECT, reason)
                        //这一句主要是为了execution中异步执行reject
                    for (let i = 0; i < this[fail].length; i++) {
                        this[fail][i](reason)
                    }
                }
                try {
                    execution(resolve, reject)
                } catch (error) {
                    this[changeStatus](REJECT, error)
                }
            }
            [changeStatus](status, result) {
                if (this[STATUS] === PENDING) {
                    this[STATUS] = status
                    this[VALUE] = result
                }
            }
        then(callback, failcallback) {
            //判断一下promise的状态是不是pending 如果是pending 就把函数放到对应的队列
            //成功 success
            //失败 fail
            if (this[STATUS] !== PENDING) {
                //看看 execution 有没有异步执行 没异步执行
                if (this[STATUS] === RESOLVE) {
                    if (typeof callback === "function") {
                        return new MyPromise((resolve, reject) => {
                            try {
                                const result = callback(this[VALUE])
                                if (result instanceof MyPromise) {
                                    result.then(data => resolve(data))
                                } else {
                                    resolve(result)
                                }
                            } catch (e) {
                                reject(e)
                            }
                        })
                    }
                } else if (this[STATUS] === REJECT) {
                    if (typeof failcallback === "function") {
                        return new MyPromise((resolve, reject) => {
                            try {
                                const result = failcallback(this[VALUE])
                                if (result instanceof MyPromise) {
                                    result.then(data => resolve(data))
                                } else {
                                    resolve(result)
                                }
                            } catch (e) {
                                reject(e)
                            }
                        })
                    } else {
                        return new MyPromise((resolve, reject) => {
                            resolve(undefined)
                        })
                    }
                }
            } else {
                console.log("状态现在是pending");
                if (typeof callback === "function") {
                    this[success].push(callback)
                }
                if (typeof failcallback === "function") {
                    this[fail].push(failcallback)
                }
            }
        }
        catch (callback) {
            if (typeof callback === "function" && this[STATUS] === REJECT) {
                return new MyPromise((resolve, reject) => {
                    try {
                        const result = callback(this[VALUE])
                        if (result instanceof MyPromise) {
                            result.then(data => resolve(data))
                        } else {
                            resolve(result)
                        }
                    } catch (e) {
                        reject(e)
                    }
                })
            }
        }
    }
})()