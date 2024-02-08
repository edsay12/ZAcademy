import { ReactNode } from "react";

function CommentNumber({commentsNumber}:{commentsNumber:number}) {
  return (
    <div className="flex justify-between items-center mb-6">
      <h2 className="text-lg lg:text-2xl font-bold text-black">
        Comentarios ({commentsNumber})
      </h2>
    </div>
  );
}

export default CommentNumber;
