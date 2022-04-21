import React from "react";
import { render } from "react-dom";
import { BoardComp } from "./boardComp";
import { Classtype, gameState, nextStep } from "./enum";
import "./gameComp.css"
import { StateComp } from "./stateComo";

interface IState {
    arr: Classtype[]
    next: nextStep
    gameState: gameState
}
export class GameComp extends React.Component<{}, IState> {
    state = {
        arr: [],
        next: nextStep.black,
        gameState: gameState.playing
    }
    init() {
        this.setState({
            arr: [
                Classtype.none,
                Classtype.none,
                Classtype.none,
                Classtype.none,
                Classtype.none,
                Classtype.none,
                Classtype.none,
                Classtype.none,
                Classtype.none,
            ],
            next: nextStep.black,
            gameState: gameState.playing,
        })
    }
    componentDidMount() {
        this.init()
    }
    handelClick(index: number) {
        let newArr: Classtype[] = [...this.state.arr]
        if (this.state.next === nextStep.red) {
            newArr[index] = Classtype.red
        } else {
            newArr[index] = Classtype.black
        }
        let gameState = this.gameover(newArr, index, this.state.next)
        let next = this.state.next === nextStep.red ? nextStep.black : nextStep.red
        this.setState({
            arr: newArr,
            next: next,
            gameState: gameState
        })
    }
    gameover(arr: Classtype[], index: number, current: nextStep): gameState {
        // 横向
        let heng = Math.floor(index / 3) * 3
        // 垂直
        let chui = (index % 3)
        if (
            arr[heng] === arr[heng + 1] && arr[heng] === arr[heng + 2]
            ||
            arr[chui] === arr[chui + 3] && arr[chui] === arr[chui + 6]
            ||
            // 交叉
            arr[0] === arr[4] && arr[0] === arr[8] && arr[0] !== Classtype.none
            ||
            arr[2] === arr[4] && arr[2] === arr[6] && arr[2] !== Classtype.none
        ) {
            if (current === nextStep.red) {
                return gameState.redWin
            } else {
                return gameState.blackWin
            }
        }
        if (!arr.includes(Classtype.none)) {
            return gameState.darw
        }
        return gameState.playing
    }
    reset() {
        this.init()
    }
    render() {
        return (
            <div className="title">
                <h1 >三子棋游戏</h1>
                <StateComp gameState={this.state.gameState} next={this.state.next}></StateComp>
                <BoardComp gameover={this.state.gameState !== gameState.playing} arr={this.state.arr} onClick={(index) => {
                    this.handelClick(index)
                }}></BoardComp>
                <button className="reset" onClick={() => {
                    this.reset()
                }}>重新开始</button>
            </div >
        )
    }
}