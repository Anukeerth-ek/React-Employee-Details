import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

const UserDataApi = () => {
    const [data, setData] = useState([]);
    const [page, setPage] = useState(2);
    const [loading, setLoading] = useState(false);

    // FOR FETCHING API DATA
    useEffect(() => {
        const fetchApiData = async () => {
            setLoading(true);
            try {
                const res = await fetch(`https://dummyjson.com/users?`);
                const data = await res.json();
                setData(prev => [...prev, ...data.users]);
            } catch (error) {
                console.error("Error fetching data:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchApiData();
    }, [page]);

    // FOR HANDLING THE INFINTE SCROLL
    useEffect(() => {
        const handleInfiniteScroll = () => {
            if (window.innerHeight + document.documentElement.scrollTop + 1 >= document.documentElement.scrollHeight) {
                if (!loading) {
                    
                }
            }
        };

        window.addEventListener("scroll", handleInfiniteScroll);
        return () => {
            window.removeEventListener("scroll", handleInfiniteScroll);
        };
    }, [loading]);

    return (
        <div className="mx-10">
            <UserDetail data={data} />
            {loading && <div>Loading...</div>}
        </div>
    );
};

export default UserDataApi;
