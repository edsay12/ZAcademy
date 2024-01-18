import Image from "next/image";

function TestimonialCard() {
  return (
    <>
      <div className="px-3 md:w-1/3 mt-20">
        <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-5 text-gray-800 font-light mb-6">
          <div className="w-full flex mb-4 items-center">
            <div className="overflow-hidden rounded-full w-10 h-10 bg-gray-50 border border-gray-200">
              <Image
                src="/cardUser.jpeg"
                alt=""
                width={100}
                height={100}
                className="w-10 h-10"
              />
            </div>
            <div className="flex-grow pl-3">
              <h6 className="font-bold text-sm uppercase text-gray-600">
                Kenzie Edgar.
              </h6>
            </div>
          </div>
          <div className="w-full">
            <p className="text-sm leading-tight">
              <span className="text-lg leading-none italic font-bold text-gray-400 mr-1">
                &quot;
              </span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos sunt
              ratione dolor exercitationem minima quas itaque saepe quasi
              architecto vel! Accusantium, vero sint recusandae cum tempora nemo
              commodi soluta deleniti.
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
