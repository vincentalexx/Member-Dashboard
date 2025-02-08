import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Loading from '../assets/loading.gif';

const Flag = ({ nat, country }) => {
  const [flagUrl, setFlagUrl] = useState('');

  useEffect(() => {
    const fetchFlag = async () => {
      try {
        const response = await axios.get(`https://flagcdn.com/256x192/${nat.toLowerCase()}.png`);
        setFlagUrl(response.config.url);
      } catch (error) {
        console.error('Error fetching the flag:', error);
      }
    };

    fetchFlag();
  }, [nat]);

  return (
    <div className='w-full'>
      {flagUrl ? (
        <img className='h-[18px] w-[20px]' src={flagUrl} alt={country} />
      ) : (
        <img className='w-4' src={Loading} alt="loading" />
      )}
    </div>
  );
};

export default Flag;