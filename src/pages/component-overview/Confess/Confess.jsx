import { Link } from "react-router-dom";
import confess from "../../../assets/gif/confess.gif";
import img3 from "../../../assets/images/img3.jpg";

export default function Confess() {
  return (
    <div
      id="confess"
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${img3})`,
      }}
    >
      <div className="hero-overlay bg-opacity-50"></div>

      <div className="block text-center md:flex md:justify-center md:items-center">
        <div className="w-[100vw] h-[100vh] block text-center md:flex md:justify-center md:items-center ">
          <div className="flex justify-center items-center pt-20 md:pt-0">
            <img
              src={confess}
              className="mr-0 md:mr-3"
              alt="valentine umbrella"
            />
          </div>
          <div>
            <h3 className="font-bold text-white text-center text-xl mt-5 md:mt-0">
              যখনই তুমি কাছে, সময় কাটে হেসে
              <br />
              লাগে জানালা তুমি বদ্ধ এই মনে
              <br />
              বিষণ্ণতা কেটে যায় তোমারই ছোঁয়ায়
              <br />
              যে ছোঁয়া আমার আরও চাওয়া বাকি
              <br />
              একই সাথে সকাল দেখা বাকি
              <br />
              সাগরতরে মিলে ভেজা বাকি
              <br />
              যত কথা তোমার বলার– শোনা বাকি
              <br />এ জীবন তোমার নামে করা বাকি
            </h3>
            <Link to="/proposal">
              <button className="btn btn-sm btn-outline btn-[#FF0000] btn-error mt-2">
                Continue....
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
