import { useState } from "react";
import {
  BsEmojiAngry,
  BsEmojiAngryFill,
  BsEmojiAstonishedFill,
  BsEmojiExpressionlessFill,
  BsEmojiGrinFill,
  BsEmojiHeartEyesFill,
} from "react-icons/bs";
import { FaSmile } from "react-icons/fa";

const itens = [
  {
    id: 1,
    value:1,
    ico: <BsEmojiAngryFill />,
  },
  {
    id: 2,
    value:2,
    ico: <BsEmojiAstonishedFill />,
  },
  {
    id: 1,
    value:3,
    ico: <BsEmojiExpressionlessFill />,
  },
  {
    id: 1,
    value:4,
    ico: <BsEmojiGrinFill />,
  },
  {
    id: 1,
    value:5,
    ico: <BsEmojiHeartEyesFill />,
  },
];
function Rating() {
  const [ratingValue, setRating] = useState<Number>();
  console.log(ratingValue)
  return (
    <form className="flex gap-3">
      {itens.map((item, index ) => [
        <label
          key={item.id}
          className="cursor-pointer relative"
          onClick={() => setRating(item.value )}
        >
          <input
            type="radio"
            name="rating"
            title="stared"
            value={index + 1}
            className="sr-only"
          />
          <div className="text-5xl text-gray-400  border  border-black box-border   rounded-full w-full hover:scale-125 ">
            <div
              className={`bg-black bg-opacity-90 rounded-full border-none hover:text-yellow-400 ${
                item.value === ratingValue && 'text-yellow-400'
              }`}
            >
              {item.ico}
            </div>
          </div>
        </label>,
      ])}
    </form>
  );
}

export default Rating;
