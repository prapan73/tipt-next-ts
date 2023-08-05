import classNames from "classnames";
import React from "react";

interface Props {
  title: string;
  classes?: string;
}

const MainTitle: React.FC<Props> = ({ title, classes }) => {
  return (
    <h2
      className={classNames([
        "px-4 text-5xl font-light text-gray-300 uppercase",
        classes,
      ])}
    >
      {title}
    </h2>
  );
};

export default MainTitle;
