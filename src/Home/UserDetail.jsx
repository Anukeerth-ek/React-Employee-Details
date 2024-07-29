import React from "react";
import { userDetailHeading } from "../utils/data";

const UserDetail = ({ data }) => {
     return (
          <section>
               <div>
                    <div className="relative overflow-x-auto ">
                         <table className="w-full border border-gray-300 rounded-md text-sm text-left">
                              <thead className="bg-gray-100 text-xs text-gray-700 uppercase">
                                   <tr>
                                        {userDetailHeading.map((item, index) => (
                                             <th key={index} className="px-6 py-3 border-b border-gray-200">
                                                  {item.link}
                                             </th>
                                        ))}
                                   </tr>
                              </thead>
                              <tbody>
                                   {data.map((item, index) => (
                                        <tr key={index} className="border-b border-gray-200">
                                             <td className="px-6 py-4">{item.id}</td>
                                             <td className="px-6 py-4">
                                                  <img
                                                       src={item.image}
                                                       alt= "userImage"
                                                       className="w-12 h-12 object-cover"
                                                  />
                                             </td>
                                             <td className="px-6 py-4">{item.firstName}</td>
                                             <td className="px-6 py-4">{item.age}</td>
                                             <td className="px-6 py-4">{item.company.department}</td>
                                             <td className="px-6 py-4">{item.company.address.address}</td>
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
