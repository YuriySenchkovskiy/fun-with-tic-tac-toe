import Square from "./Square";
import {useEffect, useState} from "react";

function Board(props) {
    // const [xIsNext, setXIsNext] = useState(true); // хук для ходов
    const [status, setStatus] = useState("Next player: " + (props.xIsNext ? "X" : "O"));
    // const [squares, setSquares] = useState(Array(9).fill(null)); // хук для назначения состояния их массива

    const getWinner = (squares) => {
        const lines = [ // все выигрышние позиции
            [0, 1, 2],
            [3, 4, 5],
            [6, 7, 8],
            [0, 3, 6],
            [1, 4, 7],
            [2, 5, 8],
            [0, 4, 8],
            [2, 4, 6]
        ];
        for (let i = 0; i < lines.length; i++) {
            const [a, b, c] = lines[i];
            // если у  нас значения все равны между собой и а не пустая, то победа
            if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
                return squares[a];
            }
        }
        return null;
    }

    const onHandleClick = (i) => {
        const squaresCopy = props.squares.slice(); // создаем новый массив
        if (squaresCopy[i] || getWinner(squaresCopy)) return;

        squaresCopy[i] = props.xIsNext ? "X" : "O"; //проставляем за Х если это время Х

        props.onPlay(squaresCopy);
        // setSquares(squaresCopy); // обновляем визуал
        // setXIsNext(!xIsNext); // меняем очередь хода после обновления squares
    }

    useEffect(() => {
        const winner = getWinner(props.squares);
        if (winner) {
            setStatus("Winner: " + winner);
        } else {
            setStatus("Next player: " + (props.xIsNext ? "X" : "O"));
        }
    }, [props.squares, props.xIsNext]);

    return (
        <>
            <div className="status">{status}</div>
            <div className="board-row">
                <Square value={props.squares[0]} onHandleClick={() => onHandleClick(0)}/>
                <Square value={props.squares[1]} onHandleClick={() => onHandleClick(1)}/>
                <Square value={props.squares[2]} onHandleClick={() => onHandleClick(2)}/>
            </div>
            <div className="board-row">
                <Square value={props.squares[3]} onHandleClick={() => onHandleClick(3)}/>
                <Square value={props.squares[4]} onHandleClick={() => onHandleClick(4)}/>
                <Square value={props.squares[5]} onHandleClick={() => onHandleClick(5)}/>
            </div>
            <div className="board-row">
                <Square value={props.squares[6]} onHandleClick={() => onHandleClick(6)}/>
                <Square value={props.squares[7]} onHandleClick={() => onHandleClick(7)}/>
                <Square value={props.squares[8]} onHandleClick={() => onHandleClick(8)}/>
            </div>
        </>
    );
}

export default Board;