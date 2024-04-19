import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes, forwardRef } from "react";

type inputTypeProps = {
  labelTitle?: string;
} & InputHTMLAttributes<HTMLInputElement>;

// eslint-disable-next-line react/display-name
const Input = forwardRef<HTMLInputElement, inputTypeProps>(
  ({
    labelTitle,
    className,


    ...rest
  },ref) => {
    return (
      <div className="flex flex-col gap-2  w-full">
        {labelTitle && (
          <label htmlFor="" className="text-black font-bold">
            {labelTitle}
          </label>
        )}
        <input
          type="text"
          ref={ref}
          {...rest}
          className={cn(
            "p-2 border-2 text-gray-500 outline-gray-500 ",
            className
          )}
        />
      </div>
    );
  }
);

export default Input;
