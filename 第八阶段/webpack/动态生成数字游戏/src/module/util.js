export function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}
const colors = ["#123456",
    "#abcdefg",
    "#515125",
    "#abcabc",
    "#fgedcba",
    "pink",
    "greend",
    "yellow",
]

export function getColor() {
    return colors[random(0, colors.length)]
}
export function isprime(num) {
    if (num < 2) {
        return true
    }
    for (let i = 1; i < num - 2; i++) {
        if (num % 2 == 0) {
            return false
        }
    }
    return true
}