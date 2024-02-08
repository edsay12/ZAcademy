import Button from "../Button";

type PropTypes = {
  isCommentReplyoppen: boolean;
  handdleReplyOppen: () => void;
};

function CommentReplyInput({
  isCommentReplyoppen: isOppen = false,
  handdleReplyOppen,
}: PropTypes) {
  return (
    <form className={`${!isOppen && "hidden"} mt-6 mb-6 transition-all `}>
      <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200    0">
        <label htmlFor="comment" className="sr-only">
          Your comment
        </label>
        <textarea
          id="comment"
          rows={6}
          className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none  dark:placeholder-gray-400 "
          placeholder="Escreva uma pergunta..."
          required
        ></textarea>
      </div>
      <div className="flex items-center ml-auto max-w-[200px] gap-4">
        <Button text="Comentar" bg="bg-blue-700" buttonSize="full" />
        <Button
          onClick={handdleReplyOppen}
          text="Cancelar"
          bg="bg-red-500"
          buttonSize="full"
          type="reset"
        />
      </div>
    </form>
  );
}

export default CommentReplyInput;
