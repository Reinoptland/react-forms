import React from "react";

export default function Student(props) {
  return (
    <li>
      {props.name}{" "}
      <button onClick={() => props.handleDelete(props.name)}>❌</button>
    </li>
  );
}
