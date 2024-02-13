"use client";
import { useEffect, useState } from "react";

function ProgressBar({ percentage = 50 }: { percentage: number }) {
  const [progressBarValue, setProgressBarValue] = useState<number>(percentage);
  useEffect(() => {
    setProgressBarValue(percentage);
  }, [percentage]);

  return (
    <div className="flex gap-2 items-center">
      <div className="w-full h-3 bg-gray-400 rounded-full ">
        <div
        style={{width:`${progressBarValue}%`}}
          className={`bg-blue-700 h-3 text-xs font-medium text-blue-100 text-center p-0.5 leading-none rounded-full `}
        >
          {" "}
        </div>
      </div>
      <div className="text-sm text-gray-500">{progressBarValue}%</div>
    </div>
  );
}

export default ProgressBar;
