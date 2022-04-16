
type PokerDeck = Poker[];
type Poker = {
  color:'♥'|'♦'|'♠'|'♣'
  value:number
}


function createPokerDeck():PokerDeck{
  const Deck:PokerDeck = [] 
  for (let i = 1; i < 14; i++) {
    Deck.push({
      color:'♠',
      value:i
    })
    Deck.push({
      color:'♣',
      value:i
    })
    Deck.push({
      color:'♥',
      value:i
    })
    Deck.push({
      color:'♦',
      value:i
    })
  }
  return Deck
}
function printPokerDeck(pokerDeck:PokerDeck){
  pokerDeck.forEach(el => {
      if(el.value<=10){
        console.log(el.color,el.value);
      }else if(el.value===11){
        console.log(el.color,"j");
      }else if(el.value===12){
        console.log(el.color,"q");
      }else if(el.value===13){
        console.log(el.color,"k");
      }
  });

}

let pokerdeck = createPokerDeck()

printPokerDeck(pokerdeck)