import { comment } from "postcss";
import CommentItem from "./CommentItem";
import CommentReply from "./CommentReply";
import { Comments as data } from "@/fakeData/Comments";
import CommentReplyInput from "./CommentReplyInput";
function Comments() {
  return (
    <div className="mt-10 mb-36">
      {data.map((item) => {
        return (
          <>
            <CommentItem
              comentario={item.comentario}
              dataDeCriacao={item.dataDeCriacao}
              nome={item.nome}
              id={item.id}
              idUsuario={item.idUsuario}
            />

            {item.respostas.map((respostas) => {
              return (
                <CommentReply
                  key={respostas.idDoUsuario}
                  dataDeCriacao={respostas.dataDeCriacao}
                  idUsuario={respostas.idDoUsuario}
                  nome={respostas.nome}
                  resposta={respostas.resposta}
                />
              );
            })}
          </>
        );
      })}
      
    </div>
  );
}

export default Comments;
