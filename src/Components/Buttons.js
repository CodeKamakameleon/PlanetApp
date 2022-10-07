// import { useState, useEffect } from "react";
// import { Info } from "./Info";

export const Buttons = ({ setView }) => {
  return (
    <div className="buttons">
      <button onClick={() => setView("overview")}>
        <span>01 </span>
        <span> OVERVIEW</span>
      </button>
      <button onClick={() => setView("structure")}>
        <span>02 </span> INTERNAL STRUCTURE
      </button>
      <button onClick={() => setView("geology")}>
        <span> 03</span>
        SURFACE GEOLOGY
      </button>
    </div>
  );
};
