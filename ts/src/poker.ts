
// type PokerDeck = Poker[];
// type Poker = {
//   color:'♥'|'♦'|'♠'|'♣'
//   value:number
// }

import { log } from "console"


// function createPokerDeck():PokerDeck{
//   const Deck:PokerDeck = [] 
//   for (let i = 1; i < 14; i++) {
//     Deck.push({
//       color:'♠',
//       value:i
//     })
//     Deck.push({
//       color:'♣',
//       value:i
//     })
//     Deck.push({
//       color:'♥',
//       value:i
//     })
//     Deck.push({
//       color:'♦',
//       value:i
//     })
//   }
//   return Deck
// }
// function printPokerDeck(pokerDeck:PokerDeck){
//   pokerDeck.forEach(el => {
//       if(el.value<=10){
//         console.log(el.color,el.value);
//       }else if(el.value===11){
//         console.log(el.color,"j");
//       }else if(el.value===12){
//         console.log(el.color,"q");
//       }else if(el.value===13){
//         console.log(el.color,"k");
//       }
//   });

// }

// let pokerdeck = createPokerDeck()
// printPokerDeck(pokerdeck)




//使用枚举重写

// type PokerDeck = Poker[];
// enum Color {
//   hearts = '♥',
//   diamond = '♦',
//   spade = '♠',
//   blossom = '♣'
// }
// enum Value {
//   "level1"="1",
//   "level2"="2",
//   "level3"="3",
//   "level4"="4",
//   "level5"="5",
//   "level6"="6",
//   "level7"="7",
//   "level8"="8",
//   "level9"="9",
//   "level10"="10",
//   "level11"="j",
//   "level12"="q",
//   "level13"="kk",
// }
// type Poker = {
//   color: Color
//   value: Value
// }


// function createPokerDeck(): PokerDeck {
//   const Deck: PokerDeck = []
//   var Vlaues = Object.values(Value)
//   var Colors = Object.values(Color)
//   for (const c of Colors) {
//       for (const v of Vlaues) {
//         Deck.push({
//           value:v,
//           color:c
//         })
//       }
//   }
//   return Deck
// }
// function printPokerDeck(pokerDeck: PokerDeck) {
//   pokerDeck.forEach(el => {
//       console.log(el.color, el.value);
//   });

// }

// let pokerdeck = createPokerDeck()
// printPokerDeck(pokerdeck)




// 使用接口重写
// interface Card{
//   getValue():string
// }
// type PokerDeck = Card[];
// enum Color {
//   hearts = '♥',
//   diamond = '♦',
//   spade = '♠',
//   blossom = '♣'
// }
// enum Value {
//   "level1"="1",
//   "level2"="2",
//   "level3"="3",
//   "level4"="4",
//   "level5"="5",
//   "level6"="6",
//   "level7"="7",
//   "level8"="8",
//   "level9"="9",
//   "level10"="10",
//   "level11"="j",
//   "level12"="q",
//   "level13"="kk",
// }
// interface NormalCard extends Card{
//   color: Color
//   value: Value
// }
// enum type{
//   "small"='small',
//   "big"='big'
// }
// interface Joke extends Card{
//     type:type
// }


// function createPokerDeck(): PokerDeck {
//   const Deck: PokerDeck = []
//   var Vlaues = Object.values(Value)
//   var Colors = Object.values(Color)
//   for (const c of Colors) {
//       for (const v of Vlaues) {
//         let item:NormalCard = {
//           value:v,
//           color:c,
//           getValue(){
//             return this.value+'_'+ this.color
//           }
//         }
//         Deck.push(item)
//       }
//   }
//   let joke:Joke={
//     type:type.big,
//     getValue(){
//       return this.type
//     }
//   }
//   Deck.push(joke)
//   joke = {
//     type:type.small,
//     getValue(){
//       return this.type
//     }
//   }
//   Deck.push(joke)
//   return Deck
// }
// function printPokerDeck(pokerDeck: PokerDeck) {
//   pokerDeck.forEach(el => {
//       console.log(el.getValue());
//   });

// }

// let pokerdeck = createPokerDeck()
// printPokerDeck(pokerdeck)



// 使用类重写

interface Card {
  getValue(): string
}
enum Color {
  hearts = '♥',
  diamond = '♦',
  spade = '♠',
  blossom = '♣'
}
enum Value {
  "level1" = "1",
  "level2" = "2",
  "level3" = "3",
  "level4" = "4",
  "level5" = "5",
  "level6" = "6",
  "level7" = "7",
  "level8" = "8",
  "level9" = "9",
  "level10" = "10",
  "level11" = "j",
  "level12" = "q",
  "level13" = "kk",
}
interface NormalCard extends Card {
  color: Color
  value: Value
}
enum type {
  "small" = 'small',
  "big" = 'big'
}
interface Joke extends Card {
  type: type
}
interface Player {
  player1: Deck,
  player2: Deck,
  player3: Deck,
  left: Deck,
}

class Deck {
  private deck: Card[] = []
  constructor(card?: Card[]) {
    if (card) {
      this.deck = card
    } else {
      this.init()
    }
  }
  private init() {
    var Vlaues = Object.values(Value)
    var Colors = Object.values(Color)
    for (const c of Colors) {
      for (const v of Vlaues) {
        let item: NormalCard = {
          value: v,
          color: c,
          getValue() {
            return this.value + '_' + this.color
          }
        }
        this.deck.push(item)
      }
    }
    let joke: Joke = {
      type: type.big,
      getValue() {
        return this.type
      }
    }
    this.deck.push(joke)
    joke = {
      type: type.small,
      getValue() {
        return this.type
      }
    }
    this.deck.push(joke)
  }
  print() {
    var str = ""
    this.deck.forEach((el, i) => {
      str += "\t" + el.getValue()
      if (i % 6 === 0) {
        str += "\n"
      }
    });
    log(str)
  }
  shuffle() {
    let length = this.deck.length
    for (let i = 0; i < length; i++) {
      let targetIndex = this.getRandom(0, length)
      let temp = this.deck[i]
      this.deck[i] = this.deck[targetIndex]
      this.deck[targetIndex] = temp
    }
  }
  deal(): Player {
    let player1: Deck = this.dealTake(17)
    let player2: Deck = this.dealTake(17)
    let player3: Deck = this.dealTake(17)
    let left = new Deck(this.deck)
    return {
      player1,
      player2,
      player3,
      left
    }
  }
  private dealTake(n: number): Deck {
    let arr: Card[] = []
    for (let i = 0; i < n; i++) {
      arr.push(this.deck.shift() as Card)
    }
    return new Deck(arr)
  }

  private getRandom(min: number, max: number): number {
    let dis = Math.floor(max - min)
    return Math.floor(Math.random() * dis + min)
  }
}

var deck = new Deck()
deck.shuffle()
let players =  deck.deal()
players.player1.print()
console.log("----");
players.player2.print()
console.log("----");
players.player3.print()
console.log("----");
players.left.print()
