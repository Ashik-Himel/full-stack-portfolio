'use client';
import { useEffect, useRef, useState } from 'react';
import { BiSolidSun, BiSolidMoon } from 'react-icons/bi';
import { IoGridOutline } from "react-icons/io5";
import HeaderDrawer from './headerDrawer';

export default function HeaderButtons() {
  const [darkEnabled, setDarkEnabled] = useState(false);
  const [drawerShow, setDrawerShow] = useState(false);
  const barRef = useRef(null);
  const drawerRef = useRef(null);

  useEffect(() => {
    const handleDocumentClick = e => {
      if (barRef.current && !barRef.current?.contains(e.target) && drawerRef.current && !drawerRef.current?.contains(e.target)) setDrawerShow(false);
    }
    document.addEventListener("click", handleDocumentClick);

    return () => {
      document.removeEventListener("click", handleDocumentClick);
    }
  }, [])

  return (
    <div className='flex justify-center items-center gap-4'>
      <div className='inline-flex justify-between items-center gap-[5px] bg-white text-[#0f172a] text-[1.4rem] px-1.5 py-1 rounded-[18px] relative cursor-pointer select-none' onClick={() => {setDarkEnabled(!darkEnabled)}}>
        <BiSolidSun />
        <BiSolidMoon />
        <span className={`absolute left-0 w-[30px] h-[30px] bg-primary rounded-full transition-transform duration-300 ${darkEnabled ? 'translate-x-8' : ''}`}></span>
      </div>
      <div className='text-2xl text-primary cursor-pointer select-none xl:hidden' onClick={() => setDrawerShow(!drawerShow)} ref={barRef}>
        <IoGridOutline />
      </div>

      <HeaderDrawer drawerShow={drawerShow} setDrawerShow={setDrawerShow} drawerRef={drawerRef} />
    </div>
  );
}