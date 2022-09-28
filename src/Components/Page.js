import { Routes, Route, Navigate } from "react-router-dom";
import { Planet } from "./Planet";
import { Stats } from "./Stats";
import { Navbar } from "./Navbar";

export const Page = ({ planet }) => {
  return (
    <div className="bg-stars bg-black min-w-screen min-h-screen">
      <Navbar />

      <Planet />

      <Routes>
        <Route path="/" element={<Navigate to="mercury" />} />
        <Route path="/:planetName" element={<Planet />} />
      </Routes>
    </div>
  );
};
