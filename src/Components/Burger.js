import { Link } from "react-router-dom";

export const Burger = () => {
  return (
    <div>
      <Link to="/mercury">MERCURY</Link>
      <Link to="/venus">VENUS</Link>
      <Link to="/earth">EARTH</Link>
      <Link to="/mars">MARS</Link>
      <Link to="/jupiter">JUPITER</Link>
      <Link to="/saturn">SATURN</Link>
      <Link to="/uranus">URANUS</Link>
      <Link to="/neptune">NEPTUNE</Link>
    </div>
  );
};
