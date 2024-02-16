"use client";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
function Search() {
  const params = useSearchParams();

  console.log(params.get("src"));
  return (
    <>
      <h1 className="text-black">Pagina de search</h1>
      <h1 className="">{params.get("src")}</h1>
    </>
  );
}

export default Search;
