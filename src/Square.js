import React, {useState} from 'react';
import './App.css';

function Square(props) {

    return <button className="square" onClick={props.onHandleClick}>{props.value}</button>;
}

export default Square;