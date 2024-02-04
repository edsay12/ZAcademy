import Image from "next/image";

function ActiveItem() {
  return (
    <>
      <div className="p-5 hover:bg-blue-400 flex gap-3 items-center w-full">
        <Image src="/cardBg.webp" alt="" width={100} height={100}  className=""/>
        <div>Descubra seu nivel</div>
      </div>
    </>
  );
}

export default ActiveItem;
