// import axios from "axios";
import React, { useEffect } from "react";
import { useState } from "react";
import { FetchUsers } from "../../utils/Services";

const DomTesting = () => {
  const [isClicked, setIsClicked] = useState(false);
  const [userData, setUserData] = useState([]);

  const fetchUsers = async () => {
    FetchUsers().then((data) => {
      setUserData(data);
    });
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  const handleClick = () => {
    setIsClicked(!isClicked);
  };
  return (
    <>
      <div>
        {isClicked && <h1>Clicked Successfully</h1>}

        <h1>hey,Welcome to the world full of .......</h1>
        <button onClick={handleClick}>change click state</button>
      </div>
      <div>
        {userData.map((e, index) => (
          <h1 key={index}>{e.username}</h1>
        ))}
      </div>
    </>
  );
};

export default DomTesting;
