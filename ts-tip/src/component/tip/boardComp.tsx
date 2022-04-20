import { Classtype } from "./enum";
import TipItem, { TipType } from "./tipItem";
import "./boardComp.css"
interface Iporp {
  arr: Classtype[],
  onClick?: (index: number) => void
}

export function BoardComp(porp: Iporp) {
  let result = porp.arr.map((it, i) => {
    return <TipItem
      key={i}
      onClick={() => {
        console.log(555);
      }}
      type={it} />
  })
  return (
    <div className="boardComp">
      {result}
    </div>
  );
}