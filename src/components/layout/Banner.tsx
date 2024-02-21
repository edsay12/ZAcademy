import { FaQuoteLeft } from "react-icons/fa";
import Button from "../Button";
import Image from "next/image";
import BannerImage from '../../../public/BannerImage.svg'

function Banner() {
  return (
    <div className="bg-blue-700 max-w-[1460px] max-h-[600px] xl:h-full h-[500px]  px-5  pb-0 mx-auto flex justify-center xl:justify-between mt-10">
      <div className="xl:max-w-[620px] w-full pb-5 self-center xl:flex flex-col  " >
        <h1 className="xl:text-7xl text-5xl text-center xl:text-left">
        Aprenda com os melhores cursos online 
        </h1>

        <div className="text-gray-300 flex gap-3 mt-4 xl:max-w-[620px]  items-center justify-center xl:items-end xl:justify-start">
          <span className="text-xl">
            <FaQuoteLeft />
          </span>

          <p className="text-sm ">O sucesso é a soma de pequenos esforços repetidos dia após dia.</p>
        </div>

        <div className=" w-[200px] xl:w-32 mt-10 h-full mx-auto xl:mx-0">
            <Button text="Ver mais>"  textColor="text-white" buttonSize="full" paddingY="small"  className="text-white font-extrabold"  />
        </div>
      </div>
      <div className="w-full hidden  xl:inline-block self-end">
        <Image  src={BannerImage} alt="Imagem do banner"  />
      </div>
    </div>
  );
}

export default Banner;
