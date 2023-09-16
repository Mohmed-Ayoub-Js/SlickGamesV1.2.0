import React ,  {useState , useEffect} from 'react';
import Appbar from '../Components/Home/Appbar';
import Class from '../Components/Home/Class';
import Games from '../Components/Home/Games';
import Search from '../Components/Home/Search';
import Like from '../Components/Home/Like';
import Time from '../Components/Home/Time';
import ApplicationVersion from '../Components/Home/ApplicationVersion';
const Home = ({ themeMode, toggleTheme }) => {
  const [displayItem , setDsiplayItem] = useState('block');
  const link = localStorage.getItem('link');
  useEffect(() =>{ 
  if(link){
    setDsiplayItem('block')
  } if(link === null) {
    setDsiplayItem('hidden')
  }    
},[]);

  return (
    <div>
      <Appbar themeMode={themeMode} toggleTheme={toggleTheme} />
      <div className='flex justify-between items-start gap-5 flex-col-reverse md:flex-row'>
        <div>
          <Class />
          <Search />
          <Like />
          <Time app={displayItem}/>
          <ApplicationVersion />
        </div>
        <div>
          <Games />
        </div>
      </div>
    </div>
  );
}

export default Home;
