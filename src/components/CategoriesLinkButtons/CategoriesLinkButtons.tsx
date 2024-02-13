import { CatergoriesLinkTypes } from "@/app/@types";

import CategoriesActiveLink from "./CategoriesActiveLink";


function CategoriesLinkButtons({ links }: CatergoriesLinkTypes) {
    
  return (
    <div className="flex gap-5 mt-20 mb-20 text-xs lg:text-lg md:text-sm items-center   w-full flex-wrap">
      {links.map((link) => {
        return (
          <CategoriesActiveLink key={link.name} name={link.name} path={link.path} />
        );
      })}
    </div>
  );
}

export default CategoriesLinkButtons;
