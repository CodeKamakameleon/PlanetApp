export const Image = ({ planet, view }) => {
  if (view === "overview") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}.svg`}
          alt={`${planet.name}-overview`}
          className="img"
        />
      </div>
    );
  }

  if (view === "structure") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}-internal.svg`}
          alt={`${planet.name}-internal`}
          className="img"
        />
      </div>
    );
  }
  if (view === "geology") {
    return (
      <div>
        <img
          src={`/assets/planet-${planet.name}.svg`}
          alt={`${planet.name}-overview`}
          className="img-planet"
        />

        <img
          src={`/assets/geology-${planet.name}.png`}
          alt={`${planet.name}-geology`}
          className="img-surface"
        />
      </div>
    );
  }
};
