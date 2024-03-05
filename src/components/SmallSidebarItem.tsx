import React, { ElementType } from 'react'
import { buttonStyles } from './Button'
import { twMerge } from 'tailwind-merge'

type SmallSidebarItemProps = {
    Icon: ElementType,
    title: string,
    url: string
}

const SmallSidebarItem = ({Icon,title,url}: SmallSidebarItemProps) => {
  return (
    <a href={url} className={twMerge(buttonStyles({variant:'ghost'}),
    'py-4 px-1 flex flex-col items-center rounded-lg gap-1')}>
        <Icon className='w-5 h-5'/>
        <div className='text-xs'>{title}</div>
    </a>
  )
}

export default SmallSidebarItem