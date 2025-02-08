import React, { useState, useEffect } from "react";
import axios from "axios";
import UsersList from './UsersList'
import StatsOverview from "./StatsOverview";
import Loader from "./Loader";

function Dashboard() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("https://randomuser.me/api/?results=25");
      setUsers(response.data.results);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };
  return (
    <div className='w-screen h-screen max-h-[1300px] flex justify-center items-center'>
        <div className='relative shadow-[0_0_200px_30px] shadow-gray-700 w-[80%] md:w-[75%] lg:w-[60%] xl:w-[60%] 2xl:w-[50%] h-[90%] px-5 py-10 bg-gray-200 flex flex-col gap-5 rounded-xl'>
          <div>
            <h1 className='text-xl font-semibold mb-5'>Member Dashboard</h1>
            <StatsOverview users={users}/>
          </div>
          <div className={`w-full h-[100%] flex items-center overflow-hidden ${loading ? 'justify-center' : 'justify-end'}`}>
            {loading ? <Loader /> :
              <UsersList users={users}/>
            }
          </div>
        </div>
    </div>
  )
}

export default Dashboard