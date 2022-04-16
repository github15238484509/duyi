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
function createPokerDeck() {
    const Deck = [];
    var Vlaues = Object.values(Value);
    var Colors = Object.values(Color);
    for (const c of Colors) {
        for (const v of Vlaues) {
            Deck.push({
                value: v,
                color: c
            });
        }
    }
    return Deck;
}
function printPokerDeck(pokerDeck) {
    pokerDeck.forEach(el => {
        console.log(el.color, el.value);
    });
}
let pokerdeck = createPokerDeck();
printPokerDeck(pokerdeck);
