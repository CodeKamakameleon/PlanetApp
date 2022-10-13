import { Buttons } from "./Buttons";
import { Image } from "./Image";
import { Text } from "./Text";

export const Content = ({ planet, view, setView }) => {
  return (
    <div className="content">
      <div className="frame">
        <Image planet={planet} view={view} />
      </div>
      <div className="summary">
        <Text planet={planet} view={view} />
        <Buttons setView={setView} />
      </div>
    </div>
  );
};
