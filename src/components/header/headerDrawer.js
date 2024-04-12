import Link from 'next/link';
import { FaXmark, FaArrowRightLong, FaUser, FaGraduationCap, FaBoltLightning, FaFileCode } from 'react-icons/fa6'
import { IoHomeSharp } from "react-icons/io5";
import { MdWork, MdPermContactCalendar } from "react-icons/md";
import { AiOutlineProject } from "react-icons/ai";

export const NavItem = function({navLink, setDrawerShow}) {
  return (
    <Link href={navLink?.link} className='flex justify-between items-center gap-4 mb-5 [&_div_svg]:text-xl' onClick={() => setDrawerShow(false)}>
      <div className='flex justify-center items-center gap-4'>
        {navLink?.icon} {navLink?.text}
      </div>
      <FaArrowRightLong className='text-xl mr-2' />
    </Link>
  );
}

export default function HeaderDrawer({drawerShow, setDrawerShow, drawerRef}) {
  const navLinks = [
    {
      icon: <IoHomeSharp />,
      text: 'Home',
      link: '/#home'
    },
    {
      icon: <FaUser />,
      text: 'About Me',
      link: '/#about'
    },
    {
      icon: <FaGraduationCap />,
      text: 'Educations',
      link: '/#educations'
    },
    {
      icon: <FaBoltLightning />,
      text: 'Skills',
      link: '/#skills'
    },
    {
      icon: <MdWork />,
      text: 'Services',
      link: '/#services'
    },
    {
      icon: <FaFileCode />,
      text: 'My Works',
      link: '/#works'
    },
    {
      icon: <MdPermContactCalendar />,
      text: 'Contact Me',
      link: '/#contact'
    },
    {
      icon: <AiOutlineProject />,
      text: 'Portfolio',
      link: '/portfolio'
    }
  ]

  return (
    <div className={`xl:hidden bg-gray-700 text-white w-full max-w-[300px] px-6 py-8 fixed top-0 bottom-0 transition-[left] duration-300 ${drawerShow ? "left-0" : "-left-[400px]"}`} ref={drawerRef}>
      <div className='flex justify-between items-center gap-4 mb-6'>
        <h3 className='text-xl font-medium uppercase'>Menu</h3>
        <div className='text-2xl cursor-pointer select-none' onClick={() => setDrawerShow(false)}>
          <FaXmark />
        </div>
      </div>

      {
        navLinks?.map(navLink => <NavItem key={navLink?.link} navLink={navLink} setDrawerShow={setDrawerShow} />)
      }
    </div>
  );
}