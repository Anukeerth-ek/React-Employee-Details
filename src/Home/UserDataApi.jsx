import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";
import ClipLoader from "react-spinners/ClipLoader";
import PacmanLoader from "react-spinners/PacmanLoader";

const UserDataApi = () => {
     const [data, setData] = useState([]);
     const [page, setPage] = useState(1);
     const [loading, setLoading] = useState(false);

     const apiUrl = import.meta.env.VITE_API_URL;

     // FOR FETCHING API DATA
     useEffect(() => {
          const fetchApiData = async () => {
               setLoading(true);
               try {
                    const res = await fetch(apiUrl);
                    const data = await res.json();
                    setData((prev) => [...prev, ...data.users]);
               } catch (error) {
                    console.error("Error fetching data:", error);
               } finally {
                    setLoading(false);
               }
          };

          fetchApiData();
     }, [page]);

     // FOR HANDLING THE INFINTE SCROLL
     //  useEffect(() => {
     //       const handleInfiniteScroll = () => {
     //            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
     //                 if (!loading) {
     //                      setPage((prev) => prev + 1);
     //                 }
     //            }
     //       };

     //       window.addEventListener("scroll", handleInfiniteScroll);
     //       return () => {
     //            window.removeEventListener("scroll", handleInfiniteScroll);
     //       };
     //  }, [loading]);

     return (
          <div className="mx-3 md:mx-10">
               <UserDetail data={data} />
               {loading && (
                    <div className="flex items-center justify-center mt-14">
                         <PacmanLoader
                              color="blue"
                              loading={loading}
                              size={40}
                              aria-label="Loading Spinner"
                              data-testid="loader"
                         />
                    </div>
               )}
          </div>
     );
};

export default UserDataApi;
