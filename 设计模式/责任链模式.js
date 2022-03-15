// 公司针对支付过定金的用户有一定的优惠政策。在正式购买后，已经支付过500元定金的用户会收到100元的商城优惠券，
// 200元定金的用户可以收到50元的优惠券，而之前没有支付定金的用户只能进入普通购买模式
// ，也就是没有优惠券，且在库存有限的情况下不一定保证能买到。

// 我们的订单页面是PHP吐出的模板，在页面加载之初，PHP会传递给页面几个字段。

// orderType:表示订单类型（定金用户或者普通购买用户)，
// code的值为1的时候是500元定金用户，为2的时候是200元定金用户，为3的时候是普通购买用户。

// pay:表示用户是否已经支付定金，值为true或者false,虽然用户已经下过500元定金的订单，
// 但如果他一直没有支付定金，现在只能降级进入普通购买模式。

// stock:表示当前用于普通购买的手机库存数量，已经支付过500元或者200元定金的用户不受此限制。

function roder500(orderType, pay, stock) {
    if (orderType === 1 && pay) {
        console.log('500元定金，返回100优惠券')
    } else {
        return 'next'
    }
}

function roder200(orderType, pay, stock) {
    if (orderType === 2 && pay) {
        console.log('200元定金，返回50优惠券')
    } else {
        return 'next'
    }
}

function roder(orderType, pay, stock) {
    if (orderType === 3 && stock > 0) {
        console.log('普通购买')
    } else {
        console.log('库存不足');
    }
}

function DutyOrder(fn) {
    this.fn = fn
    this.next = null
}
DutyOrder.prototype.setChain = function (chainObj) {
    this.next = chainObj
}
DutyOrder.prototype.start = function (...arg) {
    let result = this.fn.call(this, ...arg)
    if (result === "next") {
        return this.next && this.next && this.next.start(this, ...arg)
    }
    return result
}
let chain500 = new DutyOrder(roder500)
let chain200 = new DutyOrder(roder200)
let chain = new DutyOrder(roder)
chain500.setChain(chain200)
chain200.setChain(chain)

chain500.start(1, true, 0)
chain500.start(1, false, 0);
chain500.start(1, true, 10);
chain500.start(2, true, 11);
chain500.start(2, false, 1);