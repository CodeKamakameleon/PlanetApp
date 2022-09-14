import { useParams } from "react-router-dom";

export function Planet() {
  const { planetName } = useParams();

  console.log(planetName);

  return <div>planet is:</div>;
}
