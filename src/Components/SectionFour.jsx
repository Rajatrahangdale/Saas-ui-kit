import { useState } from "react";
import AppImg from "../assets/SectionFour/AppImg.png";
const SectionFour = () => {
  const [accordionOpen, setAccordionOpen] = useState(true);
  const [queTwo, setQueTwo] = useState(true);
  const [queThree, setQueThree] = useState(true);
  const [queFour, setQueFour] = useState(true);
  return (
    <>
      <div className="SecFour-Background text-white">
        <div className="text-white text-center">
          <h1 className="Lg:text-5xl md:text-4xl text-3xl pt-10 font-bold">
            Intuitive interface
          </h1>
          <p className="mt-4 lg:mx-[450px] px-8 lg:px-0">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes,
            one task at a time.
          </p>
        </div>
        <div className="w-full mx-auto">
          <img src={AppImg} alt="" className="mx-auto my-4" />
        </div>
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-4xl text-center mt-10">
            Frequently asked questions
          </h1>
          <div className="mt-10">
            {/* Q1 */}
            <div className="border-b border-gray-600 p-4">
              <div
                onClick={() => {
                  setAccordionOpen(!accordionOpen);
                }}
                className="group flex justify-between mx-5 lg:mx-[400px] "
              >
                <h2>How does the pricing work for teams</h2>
                {!accordionOpen ? (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    -
                  </h2>
                ) : (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    +
                  </h2>
                )}
              </div>
              <div className="ml-6">
                <p className={!accordionOpen ? "font-thin block" : "hidden"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ullam quidem delectus ad cumque placeat fuga nam, eaque rerum?
                  Ratione maxime,
                </p>
              </div>
            </div>
            {/* Q2 */}
            <div className="border-b border-gray-600 p-4">
              <div
                onClick={() => {
                  setQueTwo(!queTwo);
                }}
                className="group flex justify-between mx-5 lg:mx-[400px] "
              >
                <h2>How does the pricing work for teams</h2>
                {!queTwo ? (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    -
                  </h2>
                ) : (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    +
                  </h2>
                )}
              </div>
              <div className="ml-6">
                <p className={!queTwo ? "font-thin block" : "hidden"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ullam quidem delectus ad cumque placeat fuga nam, eaque rerum?
                  Ratione maxime,
                </p>
              </div>
            </div>
            {/* Q3 */}
            <div className="border-b border-gray-600 p-4">
              <div
                onClick={() => {
                  setQueThree(!queThree);
                }}
                className="group flex justify-between mx-5 lg:mx-[400px] "
              >
                <h2>How does the pricing work for teams</h2>
                {!queThree ? (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    -
                  </h2>
                ) : (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    +
                  </h2>
                )}
              </div>
              <div className="ml-6">
                <p className={!queThree ? "font-thin block" : "hidden"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ullam quidem delectus ad cumque placeat fuga nam, eaque rerum?
                  Ratione maxime,
                </p>
              </div>
            </div>
            {/* Q4 */}
            <div className="border-b border-gray-600 p-4">
              <div
                onClick={() => {
                  setQueFour(!queFour);
                }}
                className="group flex justify-between mx-5 lg:mx-[400px] "
              >
                <h2>How does the pricing work for teams</h2>
                {!queFour ? (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    -
                  </h2>
                ) : (
                  <h2 className="text-lg transition-all duration-300 ease-in-out group-active:rotate-90">
                    +
                  </h2>
                )}
              </div>
              <div className="ml-6">
                <p className={!queFour ? "font-thin block" : "hidden"}>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed
                  ullam quidem delectus ad cumque placeat fuga nam, eaque rerum?
                  Ratione maxime,
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:h-[100px]"></div>
      </div>
    </>
  );
};

export default SectionFour;
