import React from "react";
export default function StudentForm(props) {
  return (
    <form onSubmit={props.handleSubmit}>
      <label htmlFor="studentName">
        <input
          name="studentName"
          id="studentName"
          value={props.studentName}
          onChange={props.handleChange}
        />
      </label>
      <button type="submit">Add student</button>
    </form>
  );
}
