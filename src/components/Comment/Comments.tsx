import { comment } from "postcss";
import CommentItem from "./CommentItem";
import CommentReply from "./Replies";
import { Comments as data } from "@/fakeData/Comments";

import { useState } from "react";
import ReplyItem from "./ReplyItem";
import Replies from "./Replies";
function Comments() {
  const [itemVisible, setVisible] = useState(3);
  const comments = data.slice(0, itemVisible);

  const showMoreItens = () => {
    setVisible((prev) => prev + 2);
  };

  const isShowMoreVisible = comments.length >= data.length



  return (
    <div>
      <div className="mt-10 mb-36">
        {comments.map((item) => {
          return (
            <>
              <CommentItem
                comentario={item.comentario}
                dataDeCriacao={item.dataDeCriacao}
                nome={item.nome}
                id={item.id}
                idUsuario={item.idUsuario}
              />

              <Replies respostas={item.respostas} />

              
            </>
          );
        })}
        <div onClick={showMoreItens} className={`${isShowMoreVisible && 'hidden'} border p-2 text-center mt-2 cursor-pointer hover:bg-slate-100  transition-all duration-150`}>Mostrar mais</div>
      </div>
    </div>
  );
}

export default Comments;
