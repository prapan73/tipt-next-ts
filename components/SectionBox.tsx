import React from "react";
import classnames from "classnames";

interface Props {
  title: JSX.Element;
  children: string;
  rootClasses?: string;
  justify?: "start" | "center" | "end";
  show: boolean;
  isMobile: boolean;
}

const SectionBox: React.FC<Props> = ({
  title,
  children,
  rootClasses,
  justify = "start",
  show = true,
  isMobile,
}) => {
  let spaceClasses = "pl-4 pr-4 xl:pr-40";

  if (justify === "start") spaceClasses = "pl-4 xl:pl-40 pr-4";

  let activeClass = "";
  if (isMobile) {
    activeClass = show ? "block" : "hidden";
  }

  return (
    <div className={classnames([`py-16 item`, rootClasses, activeClass])}>
      <div className="container mx-auto">
        <div className={classnames([`flex justify-${justify}`])}>
          <div className="w-full md:w-2/3 xl:w-1/2">
            <div className={spaceClasses}>
              {title}
              <p>{children}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionBox;
