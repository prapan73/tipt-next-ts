import classNames from "classnames";
import React from "react";

interface Props {
  onChangePage: (index: number) => void;
  activeIndex?: number;
}

const CarouselDots: React.FC<Props> = ({ onChangePage, activeIndex = 0 }) => {
  return (
    <div className="carousel-dots">
      {[0, 1, 2].map((num: number) => (
        <button
          key={num}
          className={classNames(
            "carousel-dots-botton",
            activeIndex === num ? "active" : ""
          )}
          onClick={() => onChangePage(num)}
        ></button>
      ))}
    </div>
  );
};

export default CarouselDots;
