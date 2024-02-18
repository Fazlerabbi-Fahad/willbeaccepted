import { Link } from "react-router-dom";
import umbrella from "../../../assets/gif/umbrella.gif";
import img5 from "../../../assets/images/img5.jpg";

export default function Home() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img5})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>

      <div className="block text-center md:flex md:justify-center md:items-center">
        <div className="flex justify-center items-center pt-20 md:pt-0">
          <img
            src={umbrella}
            className="mr-0 md:mr-3"
            alt="valentine umbrella"
          />
        </div>
        <div>
          <h3 className="font-bold text-white text-center text-xl mt-5 md:mt-0">
            কিছুক্ষণ থেকে যাও, যেও না এখনই
            <br />
            তোমাকে দু' চোখ ভরে দেখার আরও যে বাকি
            <br />
            কাছে এসে জড়িয়ে ধরা বাকি
            <br />
            "ভালোবাসি তোমাকে" বলা বাকি
            <br />
            যত ব্যথা তোমার নিজের করা বাকি
            <br />এ জীবন তোমার নামে লেখা বাকি
          </h3>
          <Link to="/confess">
            <button className="btn btn-outline btn-[#FF0000] btn-error mt-2">
              Continue....
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
