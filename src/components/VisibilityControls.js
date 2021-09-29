/*Muestra las tareas que fueron completadas */
import React from "react";

export const VisibilityControl = (props) => {
  return (
    <div className="form-check-center">
      <input
        type="checkbox"
        className="form-check-input"
        checked={props.isChecked}
        onChange={(e) => props.callback(e.target.checked)}
      />
      <label className="form-check-label px-2">Show {props.description}</label>
    </div>
  );
};
