"use client"
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { useSession } from "next-auth/react";
import { staredCourse } from "@/services/stared";
type PropTypes = {
  courseId: string;
  courseImageUrl: string;
  userImageUrl: string;
  instructorName: string;
  url: string;
  stareds: { userId: string }[];
};

function CardTop({
  courseImageUrl,
  userImageUrl,
  instructorName,
  courseId,
  url = "",
  stareds,
}: PropTypes) {
  const session = useSession();
  const sessionUserId = session.data?.user.id;
  const [isStared, setIsStared] = useState(false);
  function handdleStared(){
    staredCourse.stared(sessionUserId!,courseId).then(()=>{
      setIsStared(prevIsStared => !prevIsStared);
    }).catch((err)=>{
      if(!sessionUserId){
        return alert('faça login para continuar')
      }
      alert("erro ao favoritar video")

    })
  }


  useEffect(() => {
    if (stareds && sessionUserId) {
      const isStared = stareds.find((item) => item.userId === sessionUserId)
        ? true
        : false;
      setIsStared(isStared);
      console.log("estou stared ?",isStared);
    }
  }, [stareds,sessionUserId]);
  return (
    <div className="relative w-full">
      <Link href={url}>
        <Image
          src={courseImageUrl}
          alt="Course image"
          width={100}
          height={50}
          className="w-full max-h-[200px] rounded-t-3xl object-cover"
        />
      </Link>

      <div className="flex items-center gap-3 absolute bottom-5 left-4 ">
        <Image
          src={userImageUrl}
          alt="Course mentor"
          width={100}
          height={100}
          className="w-10 h-10 rounded-full"
        />

        <p className="text-white">{instructorName}</p>
      </div>

      <div
        onClick={handdleStared}
        className={`absolute top-5 right-4 ${
          isStared ? "bg-yellow-600" : "bg-orange-600"
        }  text-white w-12 h-12 flex items-center justify-center rounded-full text-xl cursor-pointer hover:opacity-85`}
      >
        {isStared ? <AiFillHeart/> : <AiOutlineHeart/>}
      </div>
    </div>
  );
}

export default CardTop;
