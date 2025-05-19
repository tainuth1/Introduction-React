import React, { memo, useEffect, useState } from "react";

const FetchAPI = () => {
  const [users, setUsers] = useState([]);
  console.log("Fetch again")
  const fetchUsers = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users");

      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      
      const data = await response.json();
      setUsers(data)
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return <div>
    <ul>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </ul>
  </div>;
};

export default memo(FetchAPI);
