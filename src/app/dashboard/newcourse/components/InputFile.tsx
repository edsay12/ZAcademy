import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes } from "react";

type inputTypeProps = {
    labelTitle: string

} & InputHTMLAttributes<HTMLTextAreaElement>;

function TextArea({labelTitle,className,...rest}:inputTypeProps) {

  return (
    <div className="flex flex-col gap-2 mt-5">
      <label htmlFor="" className="text-black font-bold">{labelTitle}</label>
      <textarea  {...rest} className={cn("p-2 border-2 text-gray-500 outline-gray-500 border-gray-300",className)} />
    </div>
  );
}

export default TextArea;
