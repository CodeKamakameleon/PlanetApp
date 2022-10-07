export const Stats = ({ planet, className }) => {
  return (
    // sm:grid-rows-4 md:grid-cols-4

    <div className="stats">
      <div>
        <h2 className="stat-name">Mass</h2>
        {/* <h1 className="stat-num">number</h1> */}
        <h1 className="stat-num">
          {planet?.mass * 1.898 * 10000000000000000000000000000 || "N/A"} kg
        </h1>
      </div>
      <div>
        <h2 className="stat-name">Revolution Time</h2>
        {/* <h1 className="stat-num">number</h1> */}
        <h1 className="stat-num">{planet?.period || "N/A"} Days</h1>
      </div>
      <div>
        <h2 className="stat-name">Radius</h2>
        {/* <h1 className="stat-num">number</h1> */}
        <h1 className="stat-num">{planet?.radius * 69911 || "N/A"} KM</h1>
      </div>
      <div>
        <h2 className="stat-name">Average Temp</h2>
        {/* <h1 className="stat-num">number</h1> */}
        <h1 className="stat-num">{planet?.temperature || "N/A"} K</h1>
      </div>
    </div>
  );
};
