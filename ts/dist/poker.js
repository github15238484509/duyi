"use strict";
// type PokerDeck = Poker[];
// type Poker = {
//   color:'♥'|'♦'|'♠'|'♣'
//   value:number
// }
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
function createPokerDeck() {
    const Deck = [];
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
            Deck.push(item);
        }
    }
    let joke = {
        type: type.big,
        getValue() {
            return this.type;
        }
    };
    Deck.push(joke);
    joke = {
        type: type.small,
        getValue() {
            return this.type;
        }
    };
    Deck.push(joke);
    return Deck;
}
function printPokerDeck(pokerDeck) {
    pokerDeck.forEach(el => {
        console.log(el.getValue());
    });
}
let pokerdeck = createPokerDeck();
printPokerDeck(pokerdeck);
