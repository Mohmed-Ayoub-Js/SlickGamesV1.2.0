import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Game from './pages/CreateApp';
import Register from './pages/Register';
import Create from './pages/Create';
import Profile from './pages/Profile';
import AddGame from './pages/AddGame';
import NotFound from './pages/NotFound';
import CreateApp from './pages/CreateApp';
import Public from './pages/Public';
import GamePage from './pages/GamePage';
function App() {
  const [themeMode, setThemeMode] = useState('dark');
  const toggleTheme = () => {
    setThemeMode(themeMode === 'light' ? 'dark' : 'light');
  };

  const theme = createTheme({
    palette: {
      mode: themeMode,
    },
  });

  return (
    <div>
      <ThemeProvider theme={theme}>
        <CssBaseline />

        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<Home themeMode={themeMode} toggleTheme={toggleTheme} />}/>
            <Route path='games/:name' element={<Game />} />
            <Route path='/register' element={<Register themeMode={themeMode} toggleTheme={toggleTheme} />} />
            <Route path='/createAccount/:id' element={<Create themeMode={themeMode} toggleTheme={toggleTheme} />} />
            <Route path='/profile/:id' element={<Profile themeMode={themeMode} toggleTheme={toggleTheme} />} />
            <Route path='/add' element={<AddGame themeMode={themeMode} toggleTheme={toggleTheme} />} />
            <Route path='*' element={<Navigate to='/not-found' />} />
            <Route path='/not-found' element={<NotFound />} />
            <Route path='/CreateApp' element={<CreateApp />} />
            <Route path='/public/' element={<Public themeMode={themeMode} toggleTheme={toggleTheme}/>} />
            <Route path='/Games' element={<GamePage themeMode={themeMode} toggleTheme={toggleTheme}/>} />

          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </div>
  );
}

export default App;
