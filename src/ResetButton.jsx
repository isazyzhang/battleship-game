import React from "react";
import { useDispatch } from "react-redux";
import "./css/ResetButton.css";

export default function ResetButton(props) {
  const { text } = props;

  const dispatch = useDispatch();

  return (
    <button
      onClick={() =>
        dispatch({
          type: "RESET",
        })
      }
    >
      {text}
    </button>
  );
}