import React, { useEffect, useState } from "react";
import UserDetail from "./UserDetail";

const UserDataApi = () => {
     const [data, setData] = useState([]);
     
     useEffect(() => {
          fetch("https://dummyjson.com/users")
               .then((res) => res.json())
               .then((data) => setData(data.users));
     }, []);
     return <div className="mx-10">
      <UserDetail data={data}/>
     </div>;
};

export default UserDataApi;
