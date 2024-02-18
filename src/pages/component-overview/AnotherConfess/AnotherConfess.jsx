import img4 from "../../../assets/images/img4.jpg";
import proposal from "../../../assets/gif/proposal.gif";
import "./AnotherConfess.css";
import { useState } from "react";
import { Link } from "react-router-dom";

const words = [
  "Yes, I will",
  "Absolutely",
  "Of course",
  "Sure thing",
  "Let's go",
];

export default function AnotherConfess() {
  const [top, setTop] = useState(0);
  const [left, setLeft] = useState(0);
  const [clickCount, setClickCount] = useState(0);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const maxClicks = 5;

  const handleMouseOver = () => {
    const changeTop = Math.random() * 500;
    const changeLeft = Math.random() * 300;

    setTop(changeTop);
    setLeft(changeLeft);
  };

  const handleYesClick = () => {
    if (clickCount < maxClicks) {
      setClickCount(clickCount + 1);
      setCurrentWordIndex((currentWordIndex + 1) % words.length);
    } else {
      setClickCount(0);
    }
  };
  const calculateScale = () => {
    return Math.pow(2, clickCount);
  };

  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img4})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70 "></div>

      <div className="block text-center md:flex md:justify-center md:items-center">
        <div className="w-[100vw] h-[100vh] block text-center md:flex md:justify-center md:items-center ">
          <div className="flex justify-center items-center pt-20 md:pt-0">
            <img
              src={proposal}
              className="mr-0 md:mr-3"
              alt="valentine umbrella"
            />
          </div>
          <div>
            <h3 className="font-bold text-white text-center text-xl mt-5 md:mt-0">
              Will you go on a date with me????
            </h3>
            <Link to="/letsGo">
              <button
                className={`btn btn-sm btn-outline btn-[#FF0000] btn-error mt-2 ml-20 ${
                  clickCount > 0 ? "btn-double-size" : ""
                }`}
                style={{ transform: `scale(${calculateScale()})` }}
              >
                {words[currentWordIndex]}
              </button>
            </Link>
          </div>
        </div>
      </div>
      <button
        style={{ marginTop: top, marginLeft: left }}
        onMouseOver={handleMouseOver}
        onClick={handleYesClick}
        className="btn btn-sm btn-outline btn-[#FF0000] btn-error mr-2"
      >
        Nope, Go to hell
      </button>
    </div>
  );
}
