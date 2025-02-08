import React from 'react'
import Flag from './Flag'

function User({user}) {
  return (
    <tbody>
        <tr className=''>
            <td className='pr-[8px] py-[13px] w-[5%]'>
                <img className='min-w-[25px] rounded-4xl' src={user.picture.thumbnail} alt="User" />
            </td>
            <td className='pl-[8px] pr-0 py-[13px] xl:pr-0 w-[10%] xl:w-[7%]'>
                <div className='w-fit'>
                    <p className='text-[13px] font-medium w-max'>{user.name.first} {user.name.last}</p>
                    <p className='text-gray-400 text-[11px] font-medium w-max'>{user.email}</p>
                </div>
            </td>
            <td className='px-[5px] py-[13px] w-[5%] xl:w-[4%] max-w-[70px]'>
                <p className='text-[13px] font-medium'>{user.dob.age}</p>
            </td>
            <td className='text-[13px] px-[10px] py-[13px] w-[8%] max-w-[100px]'>
                <p className={`text-white text-center rounded-md w-fit py-[2px] px-1 ${user.gender === 'male' ? 'bg-blue-300' : 'bg-pink-300'}`}>{user.gender}</p>
            </td>
            <td className='pl-[10px] py-[13px] min-w-[30px] w-[5%] xl:w-[5%]'>
                <Flag nat={user.nat} country={user.location.country} />
            </td>
            <td className='text-[13px] pl-[15px] lg:pl-[2vw] xl:pl-[2.8vw] 2xl:pl-[4vw] py-[13px] w-[40%] xl:w-[30%] 2xl:w-[25%] max-w-[300px]'>
                <p className='w-fit'>{user.location.street.name} {user.location.street.number}, {user.location.city}, {user.location.country}</p>
            </td>
        </tr>
    </tbody>
  )
}

export default User