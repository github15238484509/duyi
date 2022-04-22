"use strict";
// type PokerDeck = Poker[];
// type Poker = {
//   color:'♥'|'♦'|'♠'|'♣'
//   value:number
// }
Object.defineProperty(exports, "__esModule", { value: true });
const console_1 = require("console");
var Color;
(function (Color) {
    Color["hearts"] = "\u2665";
    Color["diamond"] = "\u2666";
    Color["spade"] = "\u2660";
    Color["blossom"] = "\u2663";
})(Color || (Color = {}));
var Value;
(function (Value) {
    Value["level1"] = "1";
    Value["level2"] = "2";
    Value["level3"] = "3";
    Value["level4"] = "4";
    Value["level5"] = "5";
    Value["level6"] = "6";
    Value["level7"] = "7";
    Value["level8"] = "8";
    Value["level9"] = "9";
    Value["level10"] = "10";
    Value["level11"] = "j";
    Value["level12"] = "q";
    Value["level13"] = "kk";
})(Value || (Value = {}));
var type;
(function (type) {
    type["small"] = "small";
    type["big"] = "big";
})(type || (type = {}));
class Deck {
    constructor(card) {
        this.deck = [];
        if (card) {
            this.deck = card;
        }
        else {
            this.init();
        }
    }
    init() {
        var Vlaues = Object.values(Value);
        var Colors = Object.values(Color);
        for (const c of Colors) {
            for (const v of Vlaues) {
                let item = {
                    value: v,
                    color: c,
                    getValue() {
                        return this.value + '_' + this.color;
                    }
                };
                this.deck.push(item);
            }
        }
        let joke = {
            type: type.big,
            getValue() {
                return this.type;
            }
        };
        this.deck.push(joke);
        joke = {
            type: type.small,
            getValue() {
                return this.type;
            }
        };
        this.deck.push(joke);
    }
    print() {
        var str = "";
        this.deck.forEach((el, i) => {
            str += "\t" + el.getValue();
            if (i % 6 === 0) {
                str += "\n";
            }
        });
        (0, console_1.log)(str);
    }
    shuffle() {
        let length = this.deck.length;
        for (let i = 0; i < length; i++) {
            let targetIndex = this.getRandom(0, length);
            let temp = this.deck[i];
            this.deck[i] = this.deck[targetIndex];
            this.deck[targetIndex] = temp;
        }
    }
    deal() {
        let player1 = this.dealTake(17);
        let player2 = this.dealTake(17);
        let player3 = this.dealTake(17);
        let left = new Deck(this.deck);
        return {
            player1,
            player2,
            player3,
            left
        };
    }
    dealTake(n) {
        let arr = [];
        for (let i = 0; i < n; i++) {
            arr.push(this.deck.shift());
        }
        return new Deck(arr);
    }
    getRandom(min, max) {
        let dis = Math.floor(max - min);
        return Math.floor(Math.random() * dis + min);
    }
}
var deck = new Deck();
deck.shuffle();
let players = deck.deal();
players.player1.print();
console.log("----");
players.player2.print();
console.log("----");
players.player3.print();
console.log("----");
players.left.print();
