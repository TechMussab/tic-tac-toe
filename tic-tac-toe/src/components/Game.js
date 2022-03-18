import React, {useMemo, useRef, useState} from "react";
import Board from "./Board";
import Box from "./Box";

function isWinner(grid, winner, size, turns, r, c, mark) {
    console.log(turns)
    if (winner !== null)
        return false;
    if (turns < (size * 2) - 2) {
        return false
    }
    if (r === c || (size - r - 1) === c) {
        let flag = true
        for (let i = 0; i < size; i++) {
            if (grid[i][i] != mark) {
                flag = false
                break
            }
        }
        if (flag === true)
            return true
        flag = !flag
        for (let i = 0; i < size; i++) {
            if (grid[size - i - 1][i] != mark) {
                flag = false
                break
            }
        }
        if (flag === true)
            return true
    }
    let flag = true
    for (let i = 0; i < size; i++) {
        if (grid[r][i] != mark) {
            flag = false
            break
        }
    }
    if (flag === true)
        return true
    flag = !flag
    for (let i = 0; i < size; i++) {
        if (grid[i][c] != mark) {
            flag = false
            break
        }
    }
    if (flag === true)
        return true
    return false
}

function Game({size}) {
    const [grid, setGrid] = useState(Array.from({length: size}, () => Array.from({length: size}, () => '')));
    const [mark, setMark] = useState('X')
    const [winner, setWinner] = useState(null)
    const [turns, setTurns] = useState(0)
    const [count, setCount] = useState(0)

    // const previousState = useRef();


    function clickHandler(index) {
        console.log('memRend')
        if (winner !== null) {
            setMark(null)
            return;
        }
        let rowInd = parseInt(index / size)
        let colInd = (index % size)
        grid[rowInd][colInd] = mark

        setTurns((previousState) => previousState + 1)
        if (isWinner(grid, winner, size, turns, rowInd, colInd, mark)) {
            setWinner((previousState) => {
                return mark;
            })

            setWinner((previousState) => null)
            console.log('winner check winner: ' + winner)
            return
        }
        setMark((previousState) => previousState === 'X' ? 'O' : 'X')
        // setTurns(turns+1)
    }


    return (
        <>
            {winner !== null ? <>{winner}' is winner'</> : ''}
            <div className="">Current Player: {mark}</div>
            <Board mark={mark} size={size} grid={grid} clickHandler={clickHandler}></Board>
            <button onClick={() => setCount((previousState) => previousState + 1)}>{count}, {turns}</button>
        </>
    );
}

export default Game


// function clickHandler(index) {
//     if(winner!==null) {
//         setMark(ps=>{
//             return null
//         })
//         return;
//     }
//     let rowInd = parseInt(index / size)
//     let colInd = (index % size)
//     grid[rowInd][colInd] = mark
//
//     setTurns((previousState) =>  previousState + 1)
//     if(isWinner(grid,winner,size,turns,rowInd, colInd,mark))
//     {
//         setWinner((previousState)=>{
//             return mark;
//         })
//     }
//     setMark((previousState)=>previousState === 'X' ? 'O' : 'X')
//     // setTurns(turns+1)
// }
