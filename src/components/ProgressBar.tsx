import { useState } from "react";

function ProgressBar({ percentage=50 }: { percentage: number }) {
    const [progressBarValue,setProgressBarValue] = useState(percentage)
    console.log(progressBarValue)
  return (
    <div className="flex gap-2 items-center">
      <div className="w-full h-3 bg-gray-400 rounded-full ">
        <div className={`bg-blue-700 h-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full w-[${progressBarValue}%]`}>
          {" "}
        </div>
      </div>
      <div className="text-sm text-gray-500">{progressBarValue}%</div>
    </div>
  );
}

export default ProgressBar;
