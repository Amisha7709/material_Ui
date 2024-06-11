import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Login from './components/Login';
import { CssBaseline, Fab } from '@mui/material';
import SignUp from './components/SignUp';
import { useEffect, useState } from 'react';
import { AuthProvider } from './AuthContext';
import AddIcon from '@mui/icons-material/Add';

function App() {

  const [isAuth, setIsAuth] = useState<boolean>(false);

  useEffect(() => {
    localStorage.getItem("isAuth") ? setIsAuth(true) : setIsAuth(false);
  }, [isAuth]);

  return (
    <>
      <CssBaseline />
      <AuthProvider>
        <div className="bg-gray-950 h-screen overflow-x-hidden">
          <NavBar />

          <Routes>
            <Route index element={<Login />} />
            <Route path='/signUp' element={<SignUp />} />
            <Route path='/home' element={<Home />} />
            {/* <Route path='/you' element={<You />} />
              <Route path='/card' element={<Card />} /> */}
          </Routes>

          <Fab color="primary" aria-label="add" style={{ position: 'fixed', bottom: 16, right: 16 }}>
            <AddIcon />
          </Fab>

        </div>
      </AuthProvider>
    </>
  );
}

export default App;
