import React, { ElementType } from 'react'
import { buttonStyles } from './Button'
import { twMerge } from 'tailwind-merge'

type LargeSidebarItemProps = {
    IconOrImgUrl: ElementType | string,
    title: string,
    url: string,
    isActive?: boolean
}

const LargeSidebarItem = ({IconOrImgUrl,title,url,isActive=false}: LargeSidebarItemProps) => {
  return (
    <a href={url} className={twMerge(buttonStyles({variant:'ghost'}),
    ` px-4 py-2 flex items-center rounded-lg gap-4 w-full ${isActive? 
      "font-bold bg-neutral-100 hover:bg-secondary":undefined}`)}>
        {typeof IconOrImgUrl === 'string' ? 
        <img src={IconOrImgUrl} alt={title} className='w-5 h-5 rounded-full'/> :
         <IconOrImgUrl className='w-5 h-5'/>}
        <div className='text-sm whitespace-nowrap overflow-hidden text-ellipsis'>{title}</div>
    </a>
  )
}

export default LargeSidebarItem