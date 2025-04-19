import React, { useEffect, useState } from "react";
import "./UserList.css";
import loaderImg from "../image/loader.svg";

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);
  const [visibleList, setVisibleList] = useState(5);
  const [page, setPage] = useState(1);

  const fetchAPI = async () => {
    try {
      const data = await fetch(
        "https://pooja-azure-functions-api.azurewebsites.net/api/GetUsers"
      );
      // const data = await fetch("http://localhost:7071/api/GetUsers");
      const { users } = await data.json();
      if (!users) throw new Error("Failed to fetch users");
      setUsers(users);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAPI();
  }, [visibleList, page]);

  const goToPrev = () => {
    setLoading(true);
    visibleList > 10 && setVisibleList(visibleList - 5);
    page > 0 && setPage(page - 1);
  };

  const goToNext = () => {
    setLoading(true);
    setPage(page + 1);
  };

  if (error) return <p style={{ color: "red" }}>Error: {error}</p>;
  let currentItems = users;
  if (users.length > 5) {
    const startIndex = (page - 1) * 5;
    const endIndex = startIndex + visibleList;
    currentItems = users.slice(startIndex, endIndex);
  }

  return (
    <div>
      <h2>User List</h2>
      <table id="list">
        <thead>
          <tr>
            <th>Name</th>
            <th>Company</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>
        {!loading && currentItems ? (
          <tbody>
            {currentItems.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.firstName}
                  {user.lastName}
                </td>
                <td>{user.company.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
              </tr>
            ))}
          </tbody>
        ) : (
          <img src={loaderImg} alt="loader" />
        )}
        {currentItems.length === 0 && (
          <p style={{ textAlign: "center" }}>No users to show</p>
        )}
      </table>{" "}
      <br />
      <footer>
        <button onClick={goToPrev} disabled={page === 1}>
          Prev
        </button>{" "}
        {""}
        <button onClick={goToNext} disabled={currentItems.length === 0}>
          Next
        </button>
      </footer>
    </div>
  );
};

export default UserList;
