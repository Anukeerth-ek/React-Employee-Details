import React from "react";
import { HiFilter } from "react-icons/hi";
import { GenderData } from "../utils/data";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { setGender } from "../redux/genderSlice";
import { setAge } from "../redux/ageSlice";
import { setSearch } from "../redux/searchEmployeeSlice";
const Navbar = () => {
     const navTitle = "Employees";
     const dispatch = useDispatch();
     // FUNCTION FOR HANDLING THE GENDER
     const handleGender = (event) => {
          const selectedGender = event.target.value;
          dispatch(setGender(selectedGender));
          console.log(event.target.value);
     };

     const handleAge = (event) => {
          const selectedAge = event.target.value;

          dispatch(setAge(selectedAge));
     };

     const handleSearchEmployee = (event)=> {
         const searchedValue = event.target.value;
         dispatch(setSearch(searchedValue))
     }
     return (
          <nav>
               <div className="flex items-center justify-between mx-3 md:mx-10 md:pt-10 pt-5 pb-4 md:pb-5">
                    <div className="flex">
                         <h3 className="text-lg md:text-3xl font-bold">{navTitle}</h3>
                         <div className="w-[500px] ml-8">
                              <input
                                   type="text"
                                   placeholder="Search Employee..."
                                   className="border-2 w-full rounded-md px-2 py-1 border-gray-400"
                                   onChange={(event) => handleSearchEmployee(event)}
                              />
                         </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                         <HiFilter className="text-red-800 text-lg mr-1" />

                         <select
                              className=" border-2 flex items-center px-1 md:px-2 py-[2px] text-left rounded-md"
                              name="Age"
                              onChange={(event) => handleAge(event)}
                         >
                              <option value="">Age</option> <IoIosArrowDown className="ml-1 md:ml-4 text-red-800" />
                              <option value="lowToHigh">Low - High</option>
                              <option value="highToLow">High - Low</option>
                         </select>
                         <select
                              className=" border-2 flex items-center px-1 md:px-2 py-[2px] text-left rounded-md"
                              name="Gender"
                              onChange={(event) => handleGender(event)}
                         >
                              <option value="">Gender</option>
                              <option value="male">Male</option>
                              <option value="female">Female</option>
                         </select>
                    </div>
               </div>
          </nav>
     );
};

export default Navbar;
