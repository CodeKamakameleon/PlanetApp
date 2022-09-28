import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="flex flex-wrap items-center w-full border border-bottom border-solid pb-2 mb-4 text-slate-200">
        <h1 className="flex gap-2 px-8 pb-8 text-xl font-bold text-slate-400">
          THE PLANETS
        </h1>
        <div className="flex justify-end text-xs font-bold text-slate-300">
          <Link to="/" className="px-6">
            MERCURY
          </Link>
          <Link to="/venus" className="px-6">
            VENUS
          </Link>
          <Link to="/earth" className="px-6">
            EARTH
          </Link>
          <Link to="/mars" className="px-6">
            MARS
          </Link>
          <Link to="/jupiter" className="px-6">
            JUPITER
          </Link>
          <Link to="/saturn" className="px-6">
            SATURN
          </Link>
          <Link to="/uranus" className="px-6">
            URANUS
          </Link>
          <Link to="/neptune" className="px-6">
            NEPTUNE
          </Link>
        </div>
      </nav>
    </div>
  );
};
