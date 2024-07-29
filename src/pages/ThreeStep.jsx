import { Link } from "react-router-dom";
import Services from "../components/Servises";

function ThreeStep() {
  return (
    <>
      <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
        <div>
          <h1 className="text-[40px] text-denim font-bold">Pick add-ons</h1>
          <p className="text-gray-500">
            Add-ons help enhance your gaming experience.
          </p>
        </div>
        <Services />
        <div>
          <Link to="/fourthstep">
            <div className=" absolute bottom-0 right-0 bg-denim px-3 py-4 text-white font-bold rounded-lg">
              Next Page
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default ThreeStep;
