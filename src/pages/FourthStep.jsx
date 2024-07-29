import PricingCard from "../components/Pricing";
import { Link } from "react-router-dom";

function FourthStep() {
  return (
    <>
      <div className="relative flex flex-col items-start gap-5 w-1/3 mt-12">
        <div>
          <h1 className="text-[40px] text-denim font-bold">Finishing up</h1>
          <p className="text-gray-500">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <PricingCard />
        <div>
          <Link to="/thankpage">
            <div className=" absolute bottom-0 right-0 bg-denim px-3 py-4 text-white font-bold rounded-lg">
              Confirm
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default FourthStep;
