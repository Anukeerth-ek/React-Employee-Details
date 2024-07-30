import React from "react";
import { userDetailHeading } from "../utils/data";

const UserDetail = ({ data }) => {
     return (
          <section>
               <div>
                    <div className="relative overflow-x-auto ">
                         <table className="w-full border  rounded-full border-gray-300  text-sm text-left">
                              <thead className=" text-xs text-gray-700 uppercase">
                                   <tr>
                                        {userDetailHeading.map((item, index) => (
                                             <th key={index} className="px-6 py-3 border-b border-gray-200">
                                                  {item.link}
                                             </th>
                                        ))}
                                   </tr>
                              </thead>
                              <tbody>
                                   {data?.map((item, index) => { 
                                    console.log(item)
                                    return(
                                        <tr key={index} className="border-b border-gray-200">
                                             <td className="px-6 py-4">0{item.id}</td>
                                             <td className="px-6 py-4">
                                                  <img
                                                       src={item.image}
                                                       alt= "userImage"
                                                       className="w-12 h-12 object-cover rounded-md"
                                                  />
                                             </td>
                                             <td className="px-6 py-4">{item.firstName} {item.maidenName} {item.lastName}</td>
                                             <td className="px-6 py-4">{item.gender === 'female' ? 'F' : 'M'}/{item.age}</td>
                                             <td className="px-6 py-4">{item.company.title
                                             }</td>
                                             <td className="px-6 py-4">{item.address.state}, {item.address.country === "United States" ? "USA" : ''}</td>
                                        </tr>
                                   )})}
                              </tbody>
                         </table>
                    </div>
               </div>
          </section>
     );
};

export default UserDetail;
