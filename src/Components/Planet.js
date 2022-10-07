import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Buttons } from "./Buttons";
import { Image } from "./Image";
import { Text } from "./Text";
import { Stats } from "./Stats";

export function Planet() {
  const [planet, setPlanet] = useState(null);
  const [view, setView] = useState("overview");
  const { planetName } = useParams();
  useEffect(() => {
    fetch(`https://api.api-ninjas.com/v1/planets?name=${planetName}`, {
      headers: {
        "X-Api-Key": "vHs8mXzb2bW0mRVntK4KQA==uCt3PCOhyHadhxrO",
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => setPlanet(data[0]))
      .catch((err) => console.error(err));
  }, [planetName]);

  return !planet ? null : (
    <div className="content">
      <div className="frame">
        <Image view={view} planet={planet} />
      </div>

      <h1 className="name">{planetName}</h1>

      <div className="summary">
        <Text className="text" planet={planet} view={view} />

        <Buttons setView={setView} />
      </div>

      <Stats className="stat" planet={planet} />
    </div>
  );
}
