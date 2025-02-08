import React, { useState, useEffect } from "react";
import User from "./User";

const UsersList = ({users}) => {
  return (
    <div className="w-[97%] pr-2 h-full overflow-y-auto">
      <table className="w-full">
        {users.map((user, index) => (
          <User key={index} user={user}/>
        ))}
      </table>
    </div>
  );
};

export default UsersList;
