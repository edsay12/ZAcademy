import CommentItem from "./CommentItem";
import CommentReply from "./CommentReply";

function Comments() {
  return (
    <div className="mt-10 mb-36">
      <CommentItem />
      <CommentReply />
      <div className="w-full bg-gray-300 h-[1px]"></div>
      <CommentItem />
      <CommentReply />
      <div className="w-full bg-gray-300 h-[1px] mt-5"></div>

    </div>
  );
}

export default Comments;
