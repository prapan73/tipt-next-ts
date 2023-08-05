/* eslint-disable @next/next/no-img-element */
import React from "react";
import { NextSeo } from "next-seo";
import MainTitle from "../components/MainTitle";
import SubTitle from "../components/SubTitle";
import SectionBox from "../components/SectionBox";
import CarouselDots from "../components/CarouselDots";
import { useWindowSize } from "usehooks-ts";
import classNames from "classnames";

interface Data {
  prefix: string;
  title: string;
  mode?: "dark" | "light";
  content: string;
  rootClasses?: string;
}

const atlhetsData: Data[] = [
  {
    prefix: "01",
    title: "CONNECTION",
    content:
      "Connect with coaches directly, you can ping coaches to view profile.",
  },
  {
    prefix: "02",
    title: "COLLABORATION",
    content:
      "Work with other student athletes to increase visability. When you share and like other players videos it will increase your visability as a player. This is the team work aspect to Surface 1.",
    rootClasses: "bg-purple-50",
  },
  {
    prefix: "03",
    title: "GROWTH",
    mode: "light",
    content:
      "Resources and tools for you to get better as a student Athelte. Access to training classes, tutor sessions, etc",
    rootClasses: "bg-purple-800 text-white",
  },
];

const playersData: Data[] = [
  {
    prefix: "01",
    title: "CONNECTION",
    content:
      "Connect with talented athlete directly, you can watch their skills through video showreels directly from Surface 1.",
  },
  {
    prefix: "02",
    title: "COLLABORATION",
    rootClasses: "bg-gray-50",
    content:
      "Work with recruiter to increase your chances of finding talented athlete.",
  },
  {
    prefix: "03",
    title: "GROWTH",
    mode: "light",
    rootClasses: "bg-blue-950 text-white",
    content: "Save your time, recruit proper athlets for your team.",
  },
];

const Home = () => {
  const [isMobile, setIsMobile] = React.useState<boolean>(true);
  const [atlhetsActive, setAtlhetsActive] = React.useState<number>(0);
  const [playerActive, setPlayerActive] = React.useState<number>(0);
  const size = useWindowSize();

  React.useEffect(() => {
    setIsMobile(size.width < 767);
  }, [size]);

  const handleChangePage = (index: number) => {
    setAtlhetsActive(index);
  };

  const handleChangePage2 = (index: number) => {
    setPlayerActive(index);
  };

  return (
    <>
      <NextSeo
        title="TPIT - Prapan R. Test Assignment"
        description="Test Assignment - TPIT - Software Engineer (Web Frontend) - Prapan R."
      />

      <div className="overflow-hidden">
        <section className="relative pt-4 mt-8">
          <div className="container mx-auto">
            <div className="flex justify-end">
              <div className="w-full md:w-2/3 xl:w-1/2">
                <MainTitle title="ATHLETS" />
              </div>
            </div>
          </div>

          <div className="container relative z-10 mx-auto h-96 md:h-auto">
            <div className="flex">
              <div className="relative w-full xl:w-1/2">
                <div className="relative top-0 left-0 p-10 translate-x-0 md:p-0 md:absolute md:-top-10 md:-translate-x-1/2 xl:translate-x-0">
                  <img
                    src="/footballer.svg"
                    alt="Footballer"
                    className="max-w-xs md:max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={classNames([isMobile ? "mobile-view" : ""])}>
            {atlhetsData.map((data, index) => (
              <SectionBox
                key={index}
                title={
                  <SubTitle
                    prefix={data.prefix}
                    title={data.title}
                    mode={data.mode || "dark"}
                  />
                }
                justify="end"
                show={atlhetsActive === index}
                rootClasses={data.rootClasses || ""}
                isMobile={isMobile}
              >
                {data.content}
              </SectionBox>
            ))}

            <CarouselDots
              onChangePage={handleChangePage}
              activeIndex={atlhetsActive}
            />
          </div>
        </section>

        <section className="relative z-10 mx-auto mt-16">
          <div className="container mx-auto">
            <div className="flex justify-start">
              <div className="w-1/2">
                <MainTitle title="PLAYERS" classes="xl:pl-40" />
              </div>
            </div>
          </div>

          <div className="container relative z-10 mx-auto h-52 md:h-auto">
            <div className="flex">
              <div className="relative w-full">
                <div className="relative top-0 right-0 p-10 text-right translate-x-0 md:p-0 xl:pl-96 md:absolute md:-top-48 md:translate-x-1/2 xl:translate-x-0">
                  <img
                    src="/basketball.svg"
                    alt="Footballer"
                    className="max-w-full"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className={classNames([isMobile ? "mobile-view" : ""])}>
            {playersData.map((data, index) => (
              <SectionBox
                key={index}
                title={
                  <SubTitle
                    prefix={data.prefix}
                    title={data.title}
                    mode={data.mode || "dark"}
                  />
                }
                justify="start"
                show={playerActive === index}
                rootClasses={data.rootClasses || ""}
                isMobile={isMobile}
              >
                {data.content}
              </SectionBox>
            ))}

            <CarouselDots
              onChangePage={handleChangePage2}
              activeIndex={playerActive}
            />
          </div>
        </section>
      </div>
    </>
  );
};

export default Home;
