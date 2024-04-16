import { cn } from "@/lib/utils/cn";
import { InputHTMLAttributes } from "react";

type SelectTypeProps = {
  labelTitle: string;
} & InputHTMLAttributes<HTMLSelectElement>;
type OptionTypeProps = {} & InputHTMLAttributes<HTMLOptionElement>;

function Select({
  labelTitle,
  className,
  children,
  title = "seleção de itens",
  ...rest
}: SelectTypeProps) {
  return (
    <div className="flex flex-col gap-2 mt-5">
      <label htmlFor="" className="text-black font-bold">
        {labelTitle}
      </label>
      <select
        title={title}
        {...rest}
        className={cn(
          "p-2 border-2 text-gray-500 outline-gray-500 border-gray-300",
          className
        )}
      >
        {children}
      </select>
    </div>
  );
}

function Option({ className, ...rest }: OptionTypeProps) {
  return <option {...rest} className={cn("", className)} />;
}

export { Select, Option };
