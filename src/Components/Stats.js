export const Stats = ({ planet, setPlanet, planetName }) => {
  return (
    <div className="flex justify-center py-8 text-slate-400">
      <span className="border border-solid px-5 py-2 gap-2 ">
        DISTANCE {"  "}
        <span className="text-white">
          {planet?.distance_light_year || "No distance found."} LIGHTYEARS
        </span>
      </span>

      <span className="border border-solid px-5 py-2 gap-2">
        MASS{" "}
        <span className="text-white">
          {planet?.mass || "No mass found."} JUPITERS
        </span>{" "}
      </span>
      <span className="border border-solid px-5 py-2 gap-2">
        RADIUS{" "}
        <span className="text-white">
          {" "}
          {planet?.radius || "No radius found."} KM
        </span>
      </span>
      <span className="border border-solid px-5 py-2 gap-2">
        AVERAGE TEMP.{" "}
        <span className="text-white">
          {" "}
          {planet?.temperature || "No temp found."} °C
        </span>
      </span>
    </div>
  );
};
