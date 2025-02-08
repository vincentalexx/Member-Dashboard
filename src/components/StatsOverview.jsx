import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFlag, faMars, faPersonWalking, faUsers, faVenus } from "@fortawesome/free-solid-svg-icons";
import React, { useState, useEffect } from "react";
import Loader from "./Loader";

function StatsOverview({ users }) {
  const [uniqueNationalities, setUniqueNationalities] = useState(0);
  const [mostGender, setMostGender] = useState("");
  const [averageAge, setAverageAge] = useState(0);
  const [averageMembership, setAverageMembership] = useState(0);

  useEffect(() => {
    const nationalities = users.map(user => user.nat);
    const genders = users.map(user => user.gender);
    const ages = users.map(user => user.dob.age);

    const uniqueNats = [...new Set(nationalities)];

    setUniqueNationalities(uniqueNats.length);

    const genderCounts = {};
    genders.forEach(gender => {
      genderCounts[gender] = (genderCounts[gender] || 0) + 1;
    });
    let mostGender;
    let maxCount = 0;
    for (const gender in genderCounts) {
      if (genderCounts[gender] > maxCount) {
        mostGender = gender;
        maxCount = genderCounts[gender];
      }
    }
    setMostGender(mostGender);

    let averageAge;
    const totalAge = ages.reduce((acc, age) => acc + age, 0);
    averageAge = Math.round(totalAge / ages.length);
    setAverageAge(averageAge);

    const currentDate = new Date();
    const membership = users.map(user => {
      const registrationDate = new Date(user.registered.date);
      const timeDiff = currentDate - registrationDate;
      const yearsDiff = timeDiff / (1000 * 60 * 60 * 24 * 365.25);
      return yearsDiff;
    });

    const totalDuration = membership.reduce((sum, duration) => sum + duration, 0);
    const average = totalDuration / membership.length;
    setAverageMembership(average);
  }, [users]);

  return (
    <div className="grid grid-cols-2 gap-3">
      <div className="flex justify-between items-center bg-white p-4 rounded-xl">
        <div>
          {uniqueNationalities ? (<p className="font-bold text-2xl">{uniqueNationalities}</p>) : (<Loader />)}
          <p className="text-[14px] text-gray-400">Different Nationality</p>
        </div>
        <FontAwesomeIcon className="text-4xl" icon={faFlag} />
      </div>
      <div className="flex justify-between items-center bg-white p-4 rounded-xl">
        <div>
          {mostGender ? (<p className="font-bold text-2xl capitalize">{mostGender}</p>) : (<Loader />)}
          <p className="text-[14px] text-gray-400">Most Gender</p> 
        </div>
        {mostGender ? (
          <FontAwesomeIcon className="text-4xl" icon={mostGender === 'male' ? faMars : faVenus} />
        ) : (<Loader />)}
      </div>
      <div className="flex justify-between items-center bg-white p-4 rounded-xl">
        <div>
          {averageAge ? (<p className="font-bold text-2xl">~{averageAge}</p>) : (<Loader />)}
          <p className="text-[14px] text-gray-400">Average Age</p>
        </div>
        <FontAwesomeIcon className="text-5xl" icon={faPersonWalking} />
      </div>
      <div className="flex justify-between items-center bg-white p-4 rounded-xl">
        <div>
          {averageMembership ? (<p className="font-bold text-2xl">~{averageMembership.toFixed(0)} year</p>) : (<Loader />)} 
          <p className="text-[14px] text-gray-400">Average Membership</p>
        </div>
        <FontAwesomeIcon className="text-4xl" icon={faUsers} />
      </div>
    </div>
  );
}

export default StatsOverview;