import { ReactNode } from "react";

function TitleGrid({ title, button }: TitleArea) {
  return (
    <div>
      <div>
        <div className="flex justify-between mb-2">
          <h1 className="text-3xl font-bold">{title}</h1>
          {button}
        </div>
        <hr />
      </div>
    </div>
  );
}

type TitleArea = {
  title: string;
  button?: ReactNode;
};

export default TitleGrid;
