import Image from "next/image";
type PropTypes = {
  userImageUrl: string;
  userName: string;
  testimonialText: string;
};

function TestimonialCard({
  testimonialText,
  userImageUrl,
  userName,
}: PropTypes) {
  return (
    <>
      <div className="px-3  mt-10">
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
          <div className="w-full flex mb-4 items-center">
            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
              <Image
                src={userImageUrl}
                alt=""
                width={100}
                height={100}
                className="w-10 h-10"
              />
            </div>
            <div className="flex-grow pl-3">
              <h6 className="font-bold text-sm uppercase text-gray-600">
                {userName}
              </h6>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm leading-tight">
              <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                &quot;
              </span>
              {testimonialText}
              
              <span className="text-lg leading-none italic font-bold text-gray-400 ml-1">
                &quot;
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default TestimonialCard;
