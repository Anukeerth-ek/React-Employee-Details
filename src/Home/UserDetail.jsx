import React from "react";
import { userDetailHeading } from "../utils/data";
import { useDispatch, useSelector } from "react-redux";
import { selectSortOrder, selectSortBy, setSortOrder, setSortBy } from "../redux/sortSlice";
import { selectGender } from "../redux/genderSlice";
import { selectAge } from "../redux/ageSlice";
import { setSearchedValue } from "../redux/searchEmployeeSlice";

const UserDetail = ({ data }) => {
     const dispatch = useDispatch();
     const sortOrder = useSelector(selectSortOrder);
     const sortBy = useSelector(selectSortBy);
     const selectedGender = useSelector(selectGender);
     const ageSelector = useSelector(selectAge);
     const searchedEmployee = useSelector(setSearchedValue);
     console.log(searchedEmployee);

     // Function to handle sorting
     const handleSortData = (data, sortOrder, sortBy) => {
          return [...data].sort((a, b) => {
               let comparison = 0;
               if (sortBy === "id") {
                    comparison = a.id - b.id;
               } else if (sortBy === "firstName") {
                    comparison = a.firstName.localeCompare(b.firstName);
               }

               return sortOrder === "asc" ? comparison : -comparison;
          });
     };

     // Apply sorting
     let sortedData = handleSortData(data, sortOrder, sortBy);
    

     // Apply filtering based on selected gender
     let filteredData = selectedGender ? sortedData.filter((item) => item.gender === selectedGender) : sortedData;

  

     const handleAgeSort = ()=> {
          if (ageSelector === "lowToHigh") {
               filteredData = [...filteredData].sort((a, b) => a.age - b.age);
          } else if (ageSelector === "highToLow") {
               filteredData = [...filteredData].sort((a, b) => b.age - a.age);
          }
     }

     handleAgeSort()


     const handleSearchEmployee = ()=> {
          if (searchedEmployee) {
               filteredData = filteredData.filter(
                    (item) =>
                         item.firstName.toLowerCase().includes(searchedEmployee.toLowerCase()) ||
                         item.lastName.toLowerCase().includes(searchedEmployee.toLowerCase()) ||
                         item.maidenName.toLowerCase().includes(searchedEmployee.toLowerCase()) // Adjust fields as necessary
               );
          }
          else "User Not Found"
     }
     handleSearchEmployee()

     return (
          <section>
               <div>
                    <div className=" relative overflow-x-auto">
                         <table className="w-full border rounded-full border-gray-300 text-sm text-left">
                              <thead className="text-xs text-gray-700 uppercase">
                                   <tr className="">
                                        {userDetailHeading?.map((item, index) => (
                                             <th
                                                  key={index}
                                                  className="md:px-6 md:py-3 px-3 text-xs  py-1 border-b border-gray-200 text-gray-600 hover:underline"
                                             >
                                                  <span>{item.link}</span>
                                                  <span className="inline-flex items-center">
                                                       {item.icon1 && (
                                                            <item.icon1
                                                                 className={`ml-1 cursor-pointer ${sortOrder === 'desc' ?'text-red-600' : "text-gray-300"}`}
                                                                 onClick={() => {
                                                                      dispatch(setSortBy("id"));
                                                                      dispatch(setSortOrder("asc"));
                                                                 }}
                                                            />
                                                       )}
                                                       {item.icon2 && (
                                                            <item.icon2
                                                                 className={`ml-1 cursor-pointer ${sortOrder === 'asc' ?'text-red-600' : "text-gray-300" }`}
                                                                 onClick={() => {
                                                                      dispatch(setSortBy("id"));
                                                                      dispatch(setSortOrder("desc"));
                                                                 }}
                                                            />
                                                       )}
                                                       {/* Sorting by firstName */}
                                                       {item.nameAscending && (
                                                            <item.nameAscending
                                                                 className={`ml-1 cursor-pointer  ${sortOrder === 'desc' ?'text-red-600' : "text-gray-300"}`}
                                                                 onClick={() => {
                                                                      dispatch(setSortBy("firstName"));
                                                                      dispatch(setSortOrder("asc"));
                                                                 }}
                                                            />
                                                       )}
                                                       {item.nameDescending && (
                                                            <item.nameDescending
                                                                 className={`ml-1 cursor-pointer ${sortOrder === 'asc' ?'text-red-600' : "text-gray-300" }`}
                                                                 onClick={() => {
                                                                      dispatch(setSortBy("firstName"));
                                                                      dispatch(setSortOrder("desc"));
                                                                 }}
                                                            />
                                                       )}
                                                  </span>
                                             </th>
                                        ))}
                                   </tr>
                              </thead>
                              <tbody>
                                   {filteredData?.map((item, index) => (
                                        <tr
                                             key={index}
                                             className="border-b border-gray-200 font-semibold text-sm text-gray-500 hover:bg-gray-100 cursor-pointer" 
                                        >
                                             <td className="md:px-6 md:py-4 px-2 py-1">0{item.id}</td>
                                             <td className="px-6 py-4">
                                                  <img
                                                       src={item.image}
                                                       alt="userImage"
                                                       className="w-12 h-12 object-cover rounded-md"
                                                  />
                                             </td>
                                             <td className="px-6 py-4">
                                                  {item.firstName} {item.maidenName} {item.lastName}
                                             </td>
                                             <td className="px-6 py-4 text-blue-500">{item.email}</td>
                                             <td className="px-6 py-4 ">
                                                  {item.gender === "female" ? "F" : "M"}/{item.age}
                                             </td>
                                             <td className="px-6 py-4">{item.company.title}</td>
                                             <td className="px-6 py-4">
                                                  {item.address.state},
                                                  {item.address.country === "United States" ? "USA" : ""}
                                             </td>
                                        </tr>
                                   ))}
                              </tbody>
                         </table>
                    </div>
               </div>
          </section>
     );
};

export default UserDetail;
