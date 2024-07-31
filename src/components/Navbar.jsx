import React from "react";
import { HiFilter } from "react-icons/hi";
import { GenderData } from "../utils/data";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setGender } from "../redux/genderSlice";
const Navbar = () => {
     const navTitle = "Employees";
     const dispatch = useDispatch();
     // FUNCTION FOR HANDLING THE GENDER 
     const handleGender = (event)=> {
          const selectedGender = event.target.value;
          dispatch(setGender(selectedGender));
     }
     return (
          <nav>
               <div className="flex items-center justify-between mx-10 pt-10 pb-5">
                    <h3 className="text-3xl font-bold">{navTitle}</h3>
                    <ul className="flex items-center space-x-4">
                         <HiFilter className="text-red-800 text-lg mr-1" />

                         <li className=" border-2 flex items-center px-2 py-[2px] text-left rounded-md">
                              Country <IoIosArrowDown className="ml-4 text-red-800" />
                         </li>
                         <select className=" border-2 flex items-center px-2 py-[2px] text-left rounded-md" name="Gender" onChange={(event)=> handleGender(event)}>
                              <option value="">Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                         </select>
                    </ul>
               </div>
          </nav>
     );
};

export default Navbar;
