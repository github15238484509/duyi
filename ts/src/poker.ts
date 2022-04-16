
// type PokerDeck = Poker[];
// type Poker = {
//   color:'♥'|'♦'|'♠'|'♣'
//   value:number
// }


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

type PokerDeck = Poker[];
enum Color {
  hearts = '♥',
  diamond = '♦',
  spade = '♠',
  blossom = '♣'
}
enum Value {
  "level1"="1",
  "level2"="2",
  "level3"="3",
  "level4"="4",
  "level5"="5",
  "level6"="6",
  "level7"="7",
  "level8"="8",
  "level9"="9",
  "level10"="10",
  "level11"="j",
  "level12"="q",
  "level13"="kk",
}
type Poker = {
  color: Color
  value: Value
}


function createPokerDeck(): PokerDeck {
  const Deck: PokerDeck = []
  var Vlaues = Object.values(Value)
  var Colors = Object.values(Color)
  for (const c of Colors) {
      for (const v of Vlaues) {
        Deck.push({
          value:v,
          color:c
        })
      }
  }
  return Deck
}
function printPokerDeck(pokerDeck: PokerDeck) {
  pokerDeck.forEach(el => {
      console.log(el.color, el.value);
  });

}

let pokerdeck = createPokerDeck()
printPokerDeck(pokerdeck)