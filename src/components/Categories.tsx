import React, { useEffect, useRef, useState } from 'react'
import Button from './Button'
import { ChevronLeft, ChevronRight } from 'lucide-react'

type CategoriesProp = {
    categories: string[],
    selectedCategory: string,
    onSelect: (category: string) => void
}

const TRANSLATE_AMOUNT = 200;

const Categories = ({categories, selectedCategory, onSelect} : CategoriesProp) => {

    const [isLeftArrowVisible, setIsLeftArrowVisible] = useState(false);
    const [isRightArrowVisible, setIsRightArrowVisible] = useState(true);

    const [translate,setTranslate] = useState(300);
    const containerRef = useRef<HTMLDivElement>(null);

    function leftTranslate(){
        const newTranslate = translate - TRANSLATE_AMOUNT;
        if(newTranslate<=0) setTranslate(0);
        else setTranslate(newTranslate);
    }

    function rightTranslate(){
        if (containerRef.current === null) return;
        const newTranslate = translate + TRANSLATE_AMOUNT;
        const edge = containerRef.current.scrollWidth;
        const width = containerRef.current.clientWidth;
        if(newTranslate + width >=edge) setTranslate(edge -width);
        else setTranslate(newTranslate);
    }

    useEffect(()=>{
        if(translate===0) setIsLeftArrowVisible(false);
        else setIsLeftArrowVisible(true);
        if(containerRef.current !== null){
            if(translate + containerRef.current.clientWidth >= containerRef.current.scrollWidth){
                setIsRightArrowVisible(false);
            }else{
                setIsRightArrowVisible(true);
            }
        }
    },[categories, translate])


  return (
    <div  ref={containerRef} className='overflow-x-hidden overflow-y-clip relative'>
       <div className="flex whitespace-nowrap gap-3 transition-transform w-[max-content]"
       style={{transform: `translateX(-${translate}px)`}}>
            {categories.map((category,index) =>(
                <Button onClick={()=>onSelect(category)} variant={selectedCategory===category ? 'dark':'ghost'} className='py-1 px-3 rounded-lg whitespace-nowrap'>
                    {category}
                </Button>
            ))}
       </div>
       {isLeftArrowVisible &&<Button variant="ghost" size="icon" className={`absolute top-1/2 left-0  
        -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24`} 
        onClick={leftTranslate}>
            <ChevronLeft className='h-full aspect-square p-1.5 w-auto'/>
       </Button>}
        {isRightArrowVisible && <Button  variant="ghost" size="icon" className={`absolute top-1/2 right-0  
        -translate-y-1/2 bg-gradient-to-r from-white from-50% to-transparent w-24`}
        onClick={rightTranslate}>
            <ChevronRight className='h-full aspect-square p-1.5 w-auto'/>
        </Button>}
    </div>
  )
}

export default Categories