import React from "react";
import { HiFilter } from "react-icons/hi";
import { navData } from "../utils/data";

const Navbar = () => {
  const navTitle = "Employees"
     return (
          <nav>
               <div className="flex items-center justify-between mx-10 pt-10 pb-5">
                    <h3 className="text-3xl font-bold">{navTitle}</h3>
                    <ul className="flex items-center space-x-4">
                         <HiFilter className="text-red-800 text-lg mr-1" />
                         {navData.map((item, index) => (
                              <>
                                   <li key={index} className=" border-2 flex items-center px-2 py-[2px] text-left rounded-md">
                                        {item.link} <item.icon className="ml-4 text-red-800" />
                                   </li>
                              </>
                         ))}
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;
