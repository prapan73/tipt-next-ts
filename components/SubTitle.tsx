import classNames from "classnames";
import React from "react";

interface Props {
  prefix: string;
  title: string;
  mode?: "dark" | "light";
}

const SubTitle: React.FC<Props> = ({ prefix, title, mode = "dark" }) => {
  const subTitleModeClasses =
    mode === "dark" ? "sub-title-dark" : "sub-title-light";

  return (
    <h3
      className={classNames([
        "flex items-center mb-4 text-3xl font-light text-gray-300",
        subTitleModeClasses,
      ])}
    >
      <span>{prefix}</span>
      {title}
    </h3>
  );
};

export default SubTitle;
