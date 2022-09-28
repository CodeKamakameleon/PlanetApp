import { useState, useEffect } from "react";
import { Info } from "./Info";

export const Buttons = ({
  info,
  planet,
  internalStructure,
  surfaceGeology,
}) => {
  return (
    <div className="grid grid-rows-3 content-end my-4 mx-10">
      <button
        className="border border-solid px-5 py-2 my-2 text-slate-200 h-10 w-60"
        onClick={info.overview}
      >
        <span className="text-slate-400">01 {"  "}</span> OVERVIEW
      </button>
      <button
        className="border border-solid px-5 py-2 my-2 text-slate-200 h-10 w-60"
        onClick={internalStructure}
      >
        <span className="text-slate-400">02 {"  "}</span> INTERNAL STRUCTURE
      </button>
      <button
        className="border border-solid px-5 py-2 gap-2 my-2 text-slate-200 h-10 w-60"
        onClick={surfaceGeology}
      >
        <span className="text-slate-400"> 03 {"  "}</span> SURFACE GEOLOGY
      </button>
    </div>
  );
};
