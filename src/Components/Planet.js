import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { Buttons } from "./Buttons";
import { Image } from "./Image";
import { Info } from "./Info";
import { Stats } from "./Stats";

export function Planet() {
  const { planetName } = useParams();
  const [planet, setPlanet] = useState(null);
  const [text, setText] = useState([]);

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

  useEffect(() => {
    Info.find((obj) => {
      return setText(obj.name === planet.nameame);
    });
  }, [planet]);

  return !planet ? null : (
    <div className="grid grid-cols-2 gap-2 pt-8 px-8">
      <Image planet={planet} className="col-start-1 px-4 py-6" />

      <div>
        <h1 className="col-start-2 text-4xl font-bold uppercase text-slate-300 px-8">
          {planetName}
        </h1>

        <div></div>

        <Buttons className="col-end-2 grid grid-rows-3 text-slade-200" />
      </div>
      <Stats planet={planet} />
    </div>
  );
}
