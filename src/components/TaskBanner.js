/*Parte superior de la aplicación */

import React from "react";

export const TaskBanner = (props) => (
  <h4 className="bg-primary text-white text-center p-4">
    Anaya Task App ({props.taskItems.filter((t) => !t.done).length} task to do)
  </h4>
);
