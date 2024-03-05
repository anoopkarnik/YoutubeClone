import { ArrowLeft, Bell, Menu, Mic, Search, Upload, User } from 'lucide-react'
import React, { useState } from 'react'
import Button from '../components/Button'
import { useSidebarContext } from '../contexts/SidebarContext';

const Header = () => {
    const [showFullWidthSearch, setShowFullWidthSearch] = useState(false);
    const {toggle} = useSidebarContext();

  return (
    <div className='flex gap-10 lg:gap-20 justify-between pt-2 mb-6 mx-4'>
        <div className = {`gap-4 items-center flex-shrink-0 ${showFullWidthSearch ? 'hidden' : 'flex'}`}>
            <Button variant="ghost" size="icon" onClick={toggle}>
                <Menu/>
            </Button>
            <a href='/'>
                <h3 className='text-3xl text-red-400'>Webtube</h3>
            </a>
        </div>
        <form className={`flex-grow gap-4 justify-center items-center 
        ${showFullWidthSearch ? 'flex': 'hidden md:flex '}`}>
            {showFullWidthSearch && <Button onClick={()=>setShowFullWidthSearch(false)} type='button' size="icon" 
            variant="ghost" className='flex-shrink-0'>
                <ArrowLeft/>
            </Button>}
            <div className='flex flex-grow max-w-[600px] '>
                <input type="search" placeholder="Search" className='flex-grow border border-secondary
                rounded-l-full shadow-inner shadow-secondary py-1 px-4 outline-none text-lg w-full
                focus:border-blue-500'/>
                <Button type='button' size='default' className='py-2 px-4 rounded-r-full
                 border-secondary-border border border-l-0 flex-shrink-0'>
                    <Search/>
                </Button>
            </div>
            <Button type='button' size="icon" className='flex-shrink-0'>
                <Mic/>
            </Button>
        </form>
        <div className={`flex-shrink-0 md:gap-2 ${showFullWidthSearch? "hidden": "flex"}`}>
            <Button onClick={()=>setShowFullWidthSearch(true)} variant="ghost" size="icon" className='md:hidden'>
                <Search/>
            </Button>
            <Button variant="ghost" size="icon" className='md:hidden'>
                <Mic/>
            </Button>
            <Button variant="ghost" size="icon">
                <Upload/>
            </Button>
            <Button variant="ghost" size="icon">
            <Bell/>
            </Button>
            <Button variant="ghost" size="icon">
                <User/>
            </Button>
        </div>
    </div>
  )
}

export default Header