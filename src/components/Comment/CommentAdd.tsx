import Button from "../Button";

function CommentAdd() {
  return (
    <form className="mb-6">
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
      <Button text="Perguntar" bg="bg-blue-700" buttonSize="medium"/>
      
    </form>
  );
}

export default CommentAdd;
