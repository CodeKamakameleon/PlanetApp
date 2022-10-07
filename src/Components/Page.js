import { Routes, Route, Navigate } from "react-router-dom";
import { Planet } from "./Planet";
import { Navbar } from "./Navbar";

export const Page = ({ planet, setPlanet, view, setView }) => {
  return (
    <div className="planet">
      <Navbar
        planet={planet}
        setPlanet={setPlanet}
        view={view}
        setView={setView}
      />

      <Planet planet={planet} view={view} setView={setView} />
      <div className="app">
        <Routes>
          <Route path="/" element={<Navigate to="mercury" />} />
          <Route path="/:planetName" element={<Planet />} />
        </Routes>
      </div>
    </div>
  );
};
