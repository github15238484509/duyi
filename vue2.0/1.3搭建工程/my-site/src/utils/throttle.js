export default function throttle(fn, duration = 1000) {
    let timer = null
    return (...arg) => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn.call(this, ...arg)
        }, duration);
    }
}