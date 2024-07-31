import React from "react";
import { userDetailHeading } from "../utils/data";
import {useDispatch, useSelector} from 'react-redux'
import { selectSortOrder, setSortOrder } from "../redux/sortSlice";

const UserDetail = ({ data }) => {
     const dispatch = useDispatch();
     const sortOrder = useSelector(selectSortOrder);
   
     // Sorting function
     const sortData = (data, sortOrder) => {

       return [...data].sort((first, last) => {
          if (sortOrder === 'asc') {
              return first.id - last.id;
             } else {
               return last.id - first.id;
             }
       });
       
     };
   
     const sortedData = sortData(data, sortOrder);
     console.log(sortOrder)
     return (
          <section>
               <div>
                    <div className="relative overflow-x-auto ">
                         <table className="w-full border rounded-full border-gray-300 text-sm text-left">
                              <thead className=" text-xs text-gray-700 uppercase">
                                   <tr >
                                        {userDetailHeading?.map((item, index) => (
                                             <th
                                                  key={index}
                                                  className="px-6 py-3  border-b border-gray-200"
                                             >
                                                  <span> {item.link}</span>
                                                  <span className="inline-flex items-center ">
                                                  {item.icon1 && <item.icon1 className={`ml-1 cursor-pointer ${sortOrder === 'desc' ?'text-red-600' : "text-gray-300"}`} onClick={()=> dispatch(setSortOrder('asc'))}/>}
                                                  {item.icon2 && <item.icon2 className={`ml-1 cursor-pointer ${sortOrder === 'asc' ?'text-red-600' : "text-gray-300" }`} onClick={()=> dispatch(setSortOrder('desc'))}/>}
                                                  </span>
                                             </th>
                                        ))}
                                   </tr>
                              </thead>
                              <tbody className="">
                                   {sortedData?.map((item, index) => {
                                 
                                        return (
                                             <tr key={index} className="border-b border-gray-200 ">
                                                  <td className="px-6 py-4">0{item.id}</td>

                                                  <td className="px-6 py-4">
                                                       <img
                                                            src={item.image}
                                                            alt="userImage"
                                                            className="w-12 h-12 object-cover rounded-md"
                                                       />
                                                  </td>
                                                  <td className=" py-4">
                                                       {item.firstName} {item.maidenName} {item.lastName}
                                                  </td>
                                                  <td className="px-6 py-4">
                                                       {item.gender === "female" ? "F" : "M"}/{item.age}
                                                  </td>
                                                  <td className="px-6 py-4">{item.company.title}</td>
                                                  <td className="px-6 py-4">
                                                       {item.address.state},{" "}
                                                       {item.address.country === "United States" ? "USA" : ""}
                                                  </td>
                                             </tr>
                                        );
                                   })}
                              </tbody>
                         </table>
                    </div>
               </div>
          </section>
     );
};

export default UserDetail;
