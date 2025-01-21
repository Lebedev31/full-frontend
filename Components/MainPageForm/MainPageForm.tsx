"use client";

import style from '@/style/Registration.module.scss';
import { Button } from '@mui/material';
import Registration from './Elements/Registration';
import { useState } from 'react';
import  Login  from './Elements/Login';
function MainPageForm(){

  const [toggle, setToggle] = useState(true);
  return (
        <div className={style.registration}>
            <div className={style.registration_navigation}>
                <Button onClick={() => setToggle(true)} sx={{ color: 'black'}}>Регистрация</Button>
                <Button onClick={() => setToggle(false)} sx={{ color: 'black'}}>Вход</Button>
           </div>
          {toggle ? <Registration/> : <Login/>}
         
     </div>
)
}

export default MainPageForm