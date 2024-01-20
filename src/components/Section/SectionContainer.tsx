import { ReactNode } from "react";
import { twMerge } from "tailwind-merge";

type propTypes = {
  children: ReactNode;

  className?: string;
};

function SectionContainer({ children, className }: propTypes) {
  return (
    <section
      className={twMerge(
        `h-full block mt-16 w-full`,

        className
      )}
    >
      <div className="appcontainer">{children}</div>
    </section>
  );
}

export default SectionContainer;
