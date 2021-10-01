class Poker {
    constructor(color, number) {
        this.color = color
        this.number = number
    }
    toString() {
        var str = ""
        if (this.color == 1) {
            str = '♠'
        } else if (this.color == 2) {
            str = '♦'
        } else if (this.color == 3) {
            str = '♥'
        } else if (this.color == 4) {
            str = '♣'
        }
        if (this.number > 1 && this.number <= 10) {
            str += this.number
        } else if (this.number == 1) {
            str += "A"
        } else if (this.number == 11) {
            str += "J"
        } else if (this.number == 12) {
            str += "Q"
        } else if (this.number == 13) {
            str += "K"
        } else if (this.number == 14) {
            str = '小王'
        } else if (this.number == 15) {
            str = "大王"
        }
        return str
    }
}

module.exports = Poker