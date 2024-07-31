import React from "react";
import { HiFilter } from "react-icons/hi";
import { GenderData } from "../utils/data";
import { IoIosArrowDown } from "react-icons/io";
const Navbar = () => {
     const navTitle = "Employees";
     return (
          <nav>
               <div className="flex items-center justify-between mx-10 pt-10 pb-5">
                    <h3 className="text-3xl font-bold">{navTitle}</h3>
                    <ul className="flex items-center space-x-4">
                         <HiFilter className="text-red-800 text-lg mr-1" />

                         <li className=" border-2 flex items-center px-2 py-[2px] text-left rounded-md">
                              Country <IoIosArrowDown className="ml-4 text-red-800" />
                         </li>
                         <select
                              className=" border-2 flex items-center px-2 py-[2px] text-left rounded-md"
                              name="Gender"
                            
                         >
                              <option value="">Gender</option>
                              <option value="">Male</option>
                              <option value="">Female</option>
                         </select>
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;
