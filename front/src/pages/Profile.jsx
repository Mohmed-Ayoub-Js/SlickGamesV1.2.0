import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Appbar from '../Components/Home/Appbar';
import FormControl, { useFormControl } from '@mui/material/FormControl';
import OutlinedInput from '@mui/material/OutlinedInput';
import  Button  from '@mui/material/Button';
import LogoutIcon from '@mui/icons-material/Logout';
import { NavLink } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import AppsIcon from '@mui/icons-material/Apps';
import Public from './Public';
import  Divider  from '@mui/material/Divider';
const Profile = ({ themeMode, toggleTheme }) => {
  const handelRemove = () => {
    const check = localStorage.getItem('token');
    const userInput = prompt(`اعد كتابة ${check}`);
    if(userInput === check) {
    if (check) {
      localStorage.removeItem('token');
      localStorage.removeItem('id');
      localStorage.removeItem('link');
      localStorage.removeItem('email');
      localStorage.removeItem('timeData');
      localStorage.removeItem('address');
      localStorage.removeItem('city');
      localStorage.removeItem('state');
      localStorage.removeItem('country');
      localStorage.removeItem('pincode');
      localStorage.removeItem('role');
      localStorage.removeItem('image');
      window.location.reload();
      window.location.href = '/';
    }else {
      window.location.reload();
      window.location.href = '/';
    }
    }

  }
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const id = localStorage.getItem('id');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await Axios.get(`http://localhost:3001/user/${id}`);
        setLoading(false);
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const what = [
    {
      id: 1,
      title:'اسم اللعبة كاملة'
    },
    {
      id: 2,
      title:'رابط صورة للعبة من جهة خارجية'
    },
    {
      id: 3,
      title:'رابط تحميل اللعبة ويجب ان يكون https'
    },
  ]
  const application = [
    {
      id: 1,
      title:'اسم التطبيق كاملا'
    },
    {
      id: 2,
      title:'رابط صورة للتطبيق من مصدر اخر ذو جودة واضحة'
    },
    {
      id: 3,
      title:'رابط تحميل التطبيق يجب ان يكون https'
    },
  ];
  const myApp = [
    {
      id: 1,
      title:'منشوراتك البرمجية'
    }
  ]
  return (
<div className="min-h-screen">
  <Appbar themeMode={themeMode} toggleTheme={toggleTheme} />
  <div className='flex justify-center items-center flex-col'>

  {loading ? (
    <div className="flex justify-center items-center flex-c">
      <div className="w-16 h-16">
        <CircularProgress />
      </div>
    </div>
  ) : (
    <div className=" justify-center items-center flex-row">
      {data.map((item, index) => (
        <div key={index} className=" rounded-lg shadow-md p-4">
          <div className="flex justify-center items-center flex-col">
            <div className="rounded-lg overflow-hidden">
              <img
                src="https://static.vecteezy.com/system/resources/previews/027/703/220/non_2x/angry-character-mascot-gaming-logo-free-ai-generative-free-png.png"
                alt=""
                width={200}
                height={200}
              />
            </div>
            <h5 className="mt-2 text-lg font-semibold">{item.username}</h5>
          </div>
        </div>
      ))}
    </div>
  )}

  <div className="flex justify-center items-center md:flex-row flex-col mt-6 gap-8">
  <div className='bg-gray-800 rounded-lg shadow-lg p-[20px] flex justify-center items-center flex-col gap-3 w-[400px] text-white'>
    <h1 className='text-lime-500'>نشر لعبة</h1>

    <p>
      المتطلبات
    </p>
    <ul>
        {what.map((item, index) => (
          <li key={index} className="text-white">
            {item.title}
          </li>
        ))}
    </ul>
    <NavLink to="../add" >
      <button className="bg-lime-500 hover:bg-lime-600 text-white px-4 py-2 rounded-md">
        <SportsEsportsIcon />
      </button>
    </NavLink>
  </div>
    <h1 className="mt-2">أو</h1>
  <div className='bg-gray-800 rounded-lg shadow-lg p-[20px] flex justify-center items-center flex-col gap-3 w-[400px]'>
  <h1 className='text-blue-500'>نشر تطبيق</h1>
      <p className='text-white'>
        المتطلبات
      </p>
      <ul>
        {application.map((item, index) => (
          <li key={index} className="text-white">
            {item.title}
          </li>
        ))}
      </ul>
    <NavLink to="../add">
      <button className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md">
        <AppsIcon />
      </button>
    </NavLink>
    </div>
  </div>
  </div>



   <div className='flex justify-center items-center flex-col m-[10px]'>
    <h1>
      منشوراتك البرمجية
    </h1>
    <Public dis='hidden'/>
   </div>
 <Divider className='mt-[10px]'/>
  <div className='mt-[200px]'>
  <center>
    <h1 className="mt-2">تسجيل الخروج</h1>
    <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md" onClick={handelRemove}>
      <LogoutIcon />
    </button>    
  </center>
  </div>

</div>

  );
};

export default Profile;
