import { Classtype } from "./enum";
import TipItem, { TipType } from "./tipItem";
import "./boardComp.css"
interface Iporp {
  arr: Classtype[],
  onClick?: (index: number) => void
  gameover: boolean
}

export function BoardComp(porp: Iporp) {
  let result = porp.arr.map((it, i) => {
    return <TipItem
      key={i}
      onClick={() => {
        if (!porp.gameover) {
          porp.onClick && porp.onClick(i)
        }
      }}
      type={it} />
  })
  return (
    <div className="boardComp">
      {result}
    </div>
  );
}