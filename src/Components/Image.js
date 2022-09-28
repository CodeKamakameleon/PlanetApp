export const Image = ({ planet }) => {
  return (
    <div className="text-slate-200">
      <img alt={`${planet.name}`} src={`../assets/planet-${planet.name}.svg`} />
    </div>
  );
};
