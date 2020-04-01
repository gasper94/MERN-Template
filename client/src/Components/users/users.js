import React, { useState, useEffect } from "react";
import "./users.css";

const Users = () => {
  const [message, setMessage] = useState([]);

  useEffect(() => {
    // Update the document title using the browser API
    // console.log("hey");
    // setMessage("hey");
    fetch("/api/users/")
      .then(res => res.json())
      .then(data => setMessage(data[0].name));
  });

  return (
    <p>
      <strong>{message}</strong>
    </p>
  );
};
export default Users;
