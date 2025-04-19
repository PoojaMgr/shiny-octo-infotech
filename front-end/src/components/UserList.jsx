import React, { useEffect, useState } from "react";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchAPI = async () => {
    try {
      const data = await fetch(
        "https://pooja-azure-functions-api.azurewebsites.net/api/GetUsers"
      );
      const result = await data.json();
      if (!result) throw new Error("Failed to fetch users");
      setUsers(result);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, []);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;

  return (
    <div>
      <h2>User List</h2>
      <ul>
        {users.map((u, idx) => (
          <li key={idx}>
            <strong>{u.name}</strong> - {u.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
