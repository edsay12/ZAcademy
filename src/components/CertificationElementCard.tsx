import { ReactNode } from "react";
import { PiCertificateDuotone } from "react-icons/pi";

type PropTypes = {
  title: string;
  ico: ReactNode;
  description: string;
};

function CertificationElementCard({description,ico,title}:PropTypes) {
  return (
    <div className="w-full max-w-[400px] shadow-xl bg-gray-300  opacity-90 mt-40 h-72 px-10 pt-10 flex flex-col items-center rounded-md gap-10 -mb-32">
      <div className="text-black h-12 w-12 bg-gray-200 rounded-full flex items-center justify-center">
        <span className="text-xl">
          {ico}
        </span>
      </div>
      <div>
        <h3 className="text-black font-bold text-lg opacity-100 ">{title}</h3>
      </div>
      <div>
        <p className="text-center text-black opacity-70">
          {description}
          {" "}
        </p>
      </div>
    </div>
  );
}

export default CertificationElementCard;
