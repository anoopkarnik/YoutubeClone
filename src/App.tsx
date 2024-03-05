import { useState } from 'react'
import Header from './layouts/Header'
import Categories from './components/Categories'
import { categories, videos } from './data/home'
import VideoCard from './components/VideoCard'
import Sidebar from './layouts/Sidebar'
import { SidebarProvider } from './contexts/SidebarContext'

function App() {

  const [selectedCategory, setSelectedCategory] = useState(categories[0])

  const onSelect = (category: string) => {
    setSelectedCategory(category)
  }

  return (
    <SidebarProvider>
      <div className='max-h-screen flex flex-col'>
        <Header />
        <div className='grid grid-cols-[auto,1fr] flex-grow-1 overflow-hidden'>
          <div className='h-full hover:overflow-auto'>
            <Sidebar/>
          </div>
          <div className='overflow-auto px-8 pb-4'>
            <div className='sticky top-0 bg-white z-10 pb-4'>
              <Categories categories={categories} selectedCategory={selectedCategory} onSelect={onSelect}/>
            </div>
            <div className='grid grid-cols-[repeat(auto-fill,minmax(300px,1fr))] gap-4 '>
              {videos.map((video) => (
                <VideoCard key={video.id} {...video}/>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SidebarProvider>
  )
}

export default App
