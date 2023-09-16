import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import Typography from '@mui/material/Typography';
import { NavLink } from 'react-router-dom';
const Games = () => {
  const [data, setData] = useState([]);
  const [value , setValue] = useState(0);
  useEffect(() => {
    Axios.get('http://localhost:3001/api/public/yes')
      .then((res) => {
        setData(res.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [data]);
  const handelValue = () => {
   setValue(value +1); 
  }
  return (
    <div>
      <div>
        <img src="" alt="" srcSet="" />
      </div>
      <div className="md:grid md:grid-cols-2 md:gap-4 flex justify-center items-center flex-col">
        {Array.isArray(data) ? (
          data.map((item, index) => (
            <div key={index} className='drop-shadow-2xl p-[20px] flex justify-center items-center flex-col shadow-lg rounded-lg mt-[5px] h-[500px]'>
              <div>
                <img
                  className='rounded-lg shadow-lg hover:scale-90'
                  style={{ cursor: 'pointer', transition: '0.5s' }}
                  src={item.image}
                  alt=""
                />
              </div>
              <div>{item.game}</div>
              <div>{item.des}</div>
              <div>المطور : {item.developer}</div>
              <div className='flex justify-center items-center gap-[50px]'>
                <Rating name="read-only" value={item.value} readOnly />
                <p>{item.size}</p>
              </div>
              <div>
                <NavLink target='_blank' to={item.download}>
                  <Button
                    variant="contained"
                    color="primary"
                    style={{ width: '100%' }}
                    onClick={handelValue}
                  >
                    <p>تـــحميل</p>
                  </Button>
                </NavLink>
              </div>
            </div>
          ))
        ) : (
         <div> لا يوجد بيانات لعرضها </div>
        )}
      </div>
    </div>
  );
};

export default Games;
