import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

type inputTypeProps = {
  labelTitle: string;
} & InputHTMLAttributes<HTMLTextAreaElement>;

// eslint-disable-next-line react/display-name
const TextArea = forwardRef<HTMLTextAreaElement, inputTypeProps>(
  ({ labelTitle, className, ...rest }, ref) => {
    return (
      <div className="flex flex-col gap-2 ">
        <label htmlFor="" className="text-black font-bold">
          {labelTitle}
        </label>
        <textarea
          {...rest}
          ref={ref}
          className={cn(
            "p-2 border-2 text-gray-500 outline-gray-500 border-gray-300",
            className
          )}
        />
      </div>
    );
  }
);

export default TextArea;
