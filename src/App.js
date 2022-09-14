import { useEffect } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import ".styles.css";
import { Planet } from "./Components/Planet";

export const App = () => {
  useEffect(() => {
    fetch("https://api.api-ninjas.com/v1/planets?name=earth", {
      headers: {
        "X-Api-Key": "vHs8mXzb2bW0mRVntK4KQA==uCt3PCOhyHadhxrO",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <Routes>
        <Route path="/" element={<Navigate to="mercury" />} />
        <Route path="/:planet" element={<Planet />} />
      </Routes>
    </div>
  );
};
