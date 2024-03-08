import Image from "next/image";
import FormateDateDifference from "../../utils/FormateDateDifference";
import { useState } from "react";
import ReplyItem from "./ReplyItem";
import { MdArrowDropDown, MdArrowDropUp } from "react-icons/md";

type PropTypes = {
  respostas: Response[];
};

type Response = {
  idUsuario: string;
  nome: string;
  dataDeCriacao: string;
  resposta: string;
};

function Replies({ respostas }: PropTypes) {
  const [isOppen, setIsOppen] = useState<boolean>(false);
  const [data, setData] = useState<Response[]>([]);

  const handdleOppen = () => {
    setIsOppen((state) => !state);

    if (isOppen) {
      setData([]);
    } else {
      setData(respostas);
    }
  };

  return (
    <>
      <div
        onClick={handdleOppen}
        className="ml-20 cursor-pointer text-blue-700 font-bold flex gap-5 items-center"
      >
        <p> {respostas.length} respostas</p>
        <span className="text-lg">
          {isOppen ? <MdArrowDropDown /> : <MdArrowDropUp />}
        </span>
      </div>
      {data.map(({ dataDeCriacao, idUsuario, nome, resposta }) => {
        return (
          <ReplyItem
            key={idUsuario}
            dataDeCriacao={dataDeCriacao}
            idUsuario={idUsuario}
            nome={nome}
            resposta={resposta}
          ></ReplyItem>
        );
      })}
    </>
  );
}

export default Replies;
