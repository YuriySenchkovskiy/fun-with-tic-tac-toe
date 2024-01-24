import Board from "./Board";
import {useState} from "react";

function DoGame() {

    const [xIsNext, setXIsNext] = useState(true);
    const [history, setHistory] = useState([Array(9).fill(null)]);
    const currentSquares = history[history.length - 1];

    const onHandlePlay = (nextSquares) => {
        setHistory([...history, nextSquares]);
        setXIsNext(!xIsNext);
    }

    function jumpTo(nextMove) {
        // TODO
    }

    const moves = history.map((squares, move) => {
        let description;
        if (move > 0) {
            description = 'Go to move #' + move;
        } else {
            description = 'Go to game start';
        }
        return (
            <li>
                <button onClick={() => jumpTo(move)}>{description}</button>
            </li>
        );
    });

    return (
        <div className="game">
            <div className="game-board">
                <Board xIsNext={xIsNext} squares={currentSquares} onPlay={onHandlePlay}/>
            </div>
            <div className="game-info">
                <ol>{{moves}}</ol>
            </div>
        </div>
    );
}

export default DoGame;