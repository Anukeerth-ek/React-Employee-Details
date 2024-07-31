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
               <div className="flex items-center justify-between mx-3 md:mx-10 md:pt-10  pb-4 md:pb-5">
                    <div className=" md:flex mb-16 md:mb-0">
                         <h3 className="text-xl md:text-3xl font-bold translate-y-12 md:translate-y-0">{navTitle}</h3>
                         <div className="w-[120px] lg:w-[500px] md:ml-8 translate-y-14 md:translate-y-0">
                              <input
                                   type="text"
                                   placeholder="Search Employee..."
                                   className="border-2 w-full rounded-md md:rounded-full px-2 py-1 mt-2 md:mt-0 md:py-1 text-xs md:text-base border-gray-400 hover:border-blue-600"
                                   onChange={(event) => handleSearchEmployee(event)}
                              />
                         </div>
                    </div>
                    <div className="flex items-center space-x-2 md:space-x-4">
                         <HiFilter className="text-red-700 text-lg mr-1" />

                         <select
                              className=" border-2 flex items-center px-1 md:px-2 py-[2px] text-left rounded-md hover:border-blue-600 cursor-pointer"
                              name="Age"
                              onChange={(event) => handleAge(event)}
                         >
                              <option value="">Age</option> <IoIosArrowDown className="ml-1 md:ml-4 text-red-800" />
                              <option value="lowToHigh">Low - High</option>
                              <option value="highToLow">High - Low</option>
                         </select>
                         <select
                              className=" border-2 flex items-center px-1 md:px-2 py-[2px] text-left rounded-md hover:border-blue-600 cursor-pointer"
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
