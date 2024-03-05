import React, { useState } from 'react'
import Button from '../components/Button';
import { ChevronDown, ChevronUp } from 'lucide-react';

type LargeSidebarItemProps ={
    children: React.ReactNode,
    title?: string,
    visibleItemCount?: number
}

const LargeSidebarSection = ({children,title,visibleItemCount=Number.POSITIVE_INFINITY} :LargeSidebarItemProps) => {
  
  
  const childrenArray = React.Children.toArray(children).flat();
  const [isExpanded, setIsExpanded] = useState(false)
  const showExpand = childrenArray.length > visibleItemCount;
  const visibleChildren = isExpanded ? childrenArray :childrenArray.slice(0,visibleItemCount);
  const ButtonIcon = isExpanded ? ChevronUp : ChevronDown;

  return (
    <div className=' '>
        {title && <div className='ml-4 mt-2 text-lg mb-1'>{title}</div>}
        {visibleChildren}
        {showExpand && 
        <Button onClick={() => setIsExpanded(!isExpanded)}
         variant="ghost" className='w-full flex items-center rounded-lg gap-4 p-3'>
          <ButtonIcon className='w-5 h-5' />
          <div> { isExpanded ? 'Show Less' : 'Show More'}</div>
          </Button>}
          <hr/>
    </div>
  )
}

export default LargeSidebarSection