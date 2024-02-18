import lastHug from "../../../assets/gif/lastHug.gif";

export default function LastPage() {
  return (
    <div className="w-[100vw] h-[100vh] text-center flex justify-center items-center">
      <div>
        <div className="flex justify-center items-center pt-20 md:pt-0">
          <img
            src={lastHug}
            className="mr-0 md:mr-3"
            alt="valentine umbrella"
          />
        </div>
        <div>
          <h3 className="font-bold text-white text-center text-xl mt-5 md:mt-0">
            Let's go. I will drink cold coffee and what about you?
          </h3>
        </div>
      </div>
    </div>
  );
}
