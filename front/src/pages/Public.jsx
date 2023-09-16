import React , {useEffect , useState} from 'react'
import Axios from 'axios';
import Button from '@mui/material/Button';
import Rating from '@mui/material/Rating';
import { NavLink } from 'react-router-dom';
import Appbar from '../Components/Home/Appbar';
import SimpleSnackbar from '../Components/SnackBar';
const Public = ({ themeMode, toggleTheme , dis}) => {
  const [data , setData] = useState([]);
  const link = localStorage.getItem('link');
  const [value , setValue] = useState(0);

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/games/${link}`)
    .then(res => {
        setData(res.data);
      })
    .catch(err => console.log(err));
  }, [data]);
  const handelValue =  () => {
    setValue(value + 1);
  }
  return (
    <div>
      <div className={dis}>
      <Appbar themeMode={themeMode} toggleTheme={toggleTheme} />

      </div>

      {data.map((item , index) => (
        <div key={index} className='m-[50px]'> 
           <div key={index} className='drop-shadow-2xl p-[20px] flex justify-center items-center flex-col shadow-lg rounded-lg mt-[5px] h-[300px] w-[300px] m-[50px]' style={{borderColor:'blue'}}>
              <div>
                <img
                  className='rounded-lg shadow-lg hover:scale-90'
                  style={{ cursor: 'pointer', transition: '0.5s' }}
                  src={item.image}
                  alt=""
                />
              </div>
               <div><SimpleSnackbar messageA={item.isPublic}/></div>
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
        </div>
      ))}
    </div>
  )
}

export default Public;