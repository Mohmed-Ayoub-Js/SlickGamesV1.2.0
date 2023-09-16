import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
const Class = () => {
    const link = localStorage.getItem('link');
    const [item , setItem] = useState('انشاء حساب');
    const [go , setGo] = useState('/register');
    
    useEffect(() => {
        if(link){
            setItem('حسابي')
            setGo('/profile/my-profile')
        }

    } , [item])
  return (
    <div>
        <div className='  p-[10px] m-[20px] rounded-lg shadow-lg w-[300px]'>
            <ul>
                <NavLink to='/'>
                <li className='hover:underline w-1/2 m-[10px] hover:text-[20px]' style={{cursor:'pointer',transition:'0.5s'}}>
                    <p>الصفحة الرئيسية</p>
                </li>
                </NavLink>
                <NavLink to={go}>
                <li className='hover:underline w-1/2 m-[10px] hover:text-[20px]' style={{cursor:'pointer',transition:'0.5s'}}>
                    <p>{item}</p>
                </li>
                </NavLink>
                <NavLink to='/Games'>
                <li className='hover:underline w-1/2 m-[10px] hover:text-[20px]' style={{cursor:'pointer',transition:'0.5s'}}>
                    <p>العاب</p>
                </li>
                </NavLink>
                <NavLink to='/Applications'>
                <li className='hover:underline w-1/2 m-[10px] hover:text-[20px]' style={{cursor:'pointer',transition:'0.5s'}}>
                    <p>تطبيقات</p>
                </li>
                </NavLink>
                <NavLink to='/Chat'>
                <li className='hover:underline w-1/2 m-[10px] hover:text-[20px]' style={{cursor:'pointer',transition:'0.5s'}}>
                    <p>الدردشة العامة</p>
                </li>                    
                </NavLink>

            </ul>
        </div>
    </div>
  )
}

export default Class