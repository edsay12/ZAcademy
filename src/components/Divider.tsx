function Divider() {
  return (
    <>
      <div className="flex items-center w-full gap-3 ">
        <div className="bg-gray-400 h-[1px] w-full "></div>
        <div className="text-center col-span-1">Or</div>
        <div className="bg-gray-400 h-[1px] col-span-1 w-full"></div>
      </div>
    </>
  );
}

export default Divider;
