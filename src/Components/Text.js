import { Info } from "./Info";
import { useEffect, useState } from "react";

export const Text = ({ planet, view, planetName }) => {
  const [text, setText] = useState("");

  useEffect(() => {
    const data = Info.find((obj) => {
      return obj.name === planet.name;
    });
    setText(data?.[view]?.content || "Info not found.");
  }, [view, planet]);

  return (
    <div className="info">
      <h1 className="name">{planet.name}</h1>

      <div className="text">{text}</div>
    </div>
  );
};
