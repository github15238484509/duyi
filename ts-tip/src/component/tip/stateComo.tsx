import { nextStep, gameState } from "./enum";
import "./stateComo.css"

interface IState {
    next: nextStep
    gameState: gameState
}
export function StateComp(porp: IState) {
    let str = null
    if (porp.gameState !== gameState.playing) {
        if (porp.gameState === gameState.redWin) {
            str = <div className="redWin red">
                红方胜利
            </div>
        } else if (porp.gameState === gameState.blackWin) {
            str = <div className="blackWin black">
                黑方胜利
            </div>
        } else {
            str = <div className="dard">
                平局
            </div>
        }
    } else {

        if (porp.next === nextStep.black) {
            str = <div className="black" >
                当前黑方
            </div>
        } else {
            str = <div className="red">
                当前红方
            </div>
        }
    }
    return (
        <div className="box">
            {str}
        </div>
    );
}