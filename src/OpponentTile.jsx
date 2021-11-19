import "./css/OpponentTile.css";
import React from 'react';
import { useDispatch } from 'react-redux';

export default function OpponentTile(props) {
    const condition = props.condition; // n or s or a
    const dispatch = useDispatch();
    return (
        <div onClick={() => {
            dispatch (
                {
                    type: 'HumanClickSquare',
                    x:props.x,
                    y:props.y
                }
            );
            setTimeout(() => {
                dispatch({
                    type: "HumanChangeTurn",
                });
            }, 2000);
        }}id="opponentTile" class={condition}>
            {condition}
        </div>
    )
}