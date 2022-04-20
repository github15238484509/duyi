
import { Classtype } from './enum';
import './TipItem.css'

export interface TipType {
  type: Classtype
  onClick?: () => void
}
export default function TipItem(porp: TipType) {
  let str = null
  if (porp.type === Classtype.red) {
    str = <div className='red tip'></div>
  } else if (porp.type === Classtype.black) {
    str = <div className='black tip'></div>
  }
  return (
    <div className="tipItem" onClick={
      () => {
        if (porp.type === Classtype.none) {
          porp.onClick && porp.onClick()
        }
      }
    }>
      {str}
    </div>
  );
}