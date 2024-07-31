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
               <div className="flex items-center justify-between mx-3 md:mx-10 md:pt-10 pt-5 pb-4 md:pb-5">
                   <div className="flex">
                   <h3 className="text-lg md:text-3xl font-bold">{navTitle}</h3>
                    <div className="w-[500px] ml-8">
                         <input type="text" placeholder="Search Employee..."  className="border-2 w-full rounded-md px-2 py-1 border-gray-400" />
                    </div>
                   </div>
                    <ul className="flex items-center space-x-2 md:space-x-4">
                         <HiFilter className="text-red-800 text-lg mr-1" />

                         <select className=" border-2 flex items-center px-1 md:px-2 py-[2px] text-left rounded-md">
                              <option value="">Filter</option> <IoIosArrowDown className="ml-1 md:ml-4 text-red-800" />
                              <option value="">Age</option>
                              <option value="">Country</option>
                         </select>
                         <select className=" border-2 flex items-center px-1 md:px-2 py-[2px] text-left rounded-md" name="Gender" onChange={(event)=> handleGender(event)}>
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
