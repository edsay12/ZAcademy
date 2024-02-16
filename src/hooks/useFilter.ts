// import { useState } from "react";

// function useFilter(data: ) {
//   const [busca, setBusca] = useState<string>("");
//   const [genero, setGenero] = useState<string>("");

//   const datafiltred = data?.filter(
//     (data) =>
//       (genero === "" || genero === "Todos" || data.genre === genero) &&
//       data.title.toLocaleLowerCase().includes(busca.toLocaleLowerCase())
//   );

//   return { datafiltred, setBusca, setGenero, genero };
// }

// export default useFilter;