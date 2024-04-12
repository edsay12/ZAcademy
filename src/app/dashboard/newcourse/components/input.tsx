import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes } from "react";

type inputTypeProps = {
    labelTitle: string

} & InputHTMLAttributes<HTMLInputElement>;

function Input({labelTitle,className,...rest}:inputTypeProps) {

  return (
    <div className="flex flex-col gap-2">
      <label htmlFor="" className="text-black font-bold">{labelTitle}</label>
      <input type="text" {...rest} className={cn("p-2 border-2 text-gray-500 outline-gray-500 border-gray-300",className)} />
    </div>
  );
}

export default Input;
