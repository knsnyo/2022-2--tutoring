import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Explore from './pages/explore/Explore';
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import Mypage from './pages/mypage/Mypage';
import Register from './pages/register/Register';
import Setting from './pages/setting/Setting';
import Write from './pages/write/Write';
import Scroll from './Scroll';

function App () {
  return (
    <>
      <BrowserRouter>
        <Scroll/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/explore" element={<Explore/>}/>
          <Route path="/mypage" element={<Mypage/>}/>
          <Route path="/write" element={<Write/>}/>
          <Route path="/setting" element={<Setting/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
