import Image from "next/image";
import { ReactNode } from "react";

type PropTypes = {
  message: string;
  children?: ReactNode;
};

function DefaultListError({ message, children }: PropTypes) {
  return (
    <div className="max-w-[1000px] mx-auto  flex flex-col items-center justify-center mt-10 gap-8">
      <Image
        alt="imagem de curso insistente"
        src={"/cartNotFound.svg"}
        width={100}
        height={100}
        className="max-w-[400px] w-full"
      />
      <p className="text-black">{message}</p>
      {!children}
    </div>
  );
}

export default DefaultListError;
