import React, { useState } from "react";
import axios from "axios";

export const Form = (props) => {
  const [user, setUser] = useState({ userName: "" });

  const HandleSubmit = async (event) => {
    event.preventDefault();
    const result = await axios.get(
      `https://api.github.com/users/${user.userName}`
    );
    console.log(result.data);
    props.onSubmit(result.data);
  };
  return (
    <form
      onSubmit={HandleSubmit}
      action=''
      style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
      <input
        type='text'
        placeholder='github username'
        value={user.userName}
        onChange={(event) => setUser({ userName: event.target.value })}
      />
      <button>Add Card</button>
    </form>
  );
};
