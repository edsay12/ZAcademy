'use client'

import Button from "@/components/Button";
import Image from "next/image";
import { useRouter } from "next/navigation";

function PaginaNãoEncontrada() {
  const router = useRouter();
  return (
    <div className="w-full h-screen flex items-center justify-center">
      <div className="max-w-[800px] flex flex-col items-center gap-5">
        <Image
          src="/cartNotFound.svg"
          alt="imagem de não encontrado"
          className="w-96"
          width={100}
          height={100}
        />
        <p className="text-black font-bold text-2xl">
          Parece que a pagina não está disponivel ou não existe ainda
        </p>
        <div className="w-[200px]">
          <Button text="Volte para o inicio" bg="bg-blue-700" onClick={()=> router.push("/")} />
        </div>
      </div>
    </div>
  );
}

export default PaginaNãoEncontrada;
