import { BugPlay, BugPlayIcon, Clapperboard, Download, Film, Flame, Gamepad2, History, Home, Library, Lightbulb, ListVideo, Music, Music2, Newspaper, PlayIcon, PlaySquareIcon, Podcast, Radio, Repeat, Shirt, ShoppingBag, TrendingUp, Trophy, User } from 'lucide-react'
import React, { useContext } from 'react'
import SmallSidebarItem from '../components/SmallSidebarItem'
import LargeSidebarItem from '../components/LargeSidebarItem'
import LargeSidebarSection from './LargeSidebarSection'
import { playlists, subscriptions } from '../data/sidebar'
import { SidebarContext, useSidebarContext } from '../contexts/SidebarContext'

const Sidebar = () => {
  const sidebarContext = useContext(SidebarContext);
  const isLargeOpen = sidebarContext?.isLargeOpen;
  const isSmallOpen = sidebarContext?.isSmallOpen;
  const close = sidebarContext?.close;

  return (
    <>
    <div className={`sticky top-0 overflow-y-auto scrollbar-hidden pb-4 flex flex-col ml-1 ${
          isLargeOpen ? "lg:hidden" : "lg:flex"}`}>
        <SmallSidebarItem Icon={Home} title="Home" url="/"/>
        <SmallSidebarItem Icon={Repeat} title="Shorts" url="/shorts"/>
        <SmallSidebarItem Icon={Clapperboard} title="Subscriptions" url="/subscriptions"/>
        <SmallSidebarItem Icon={Library} title="Library" url="/library"/>
        <SmallSidebarItem Icon={Music} title="Music" url="/music"/>
        <SmallSidebarItem Icon={PlaySquareIcon} title="channel" url="/channel"/>
        <SmallSidebarItem Icon={Download} title="Downloads" url="/downloads"/>
    </div>
    {isSmallOpen && (
        <div
          onClick={close}
          className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-50"
        />
      )}
    <div className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 
    flex-col gap-2 px-2 ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? 
    "flex z-[999] bg-white max-h-screen" : "hidden"}`}>
        <LargeSidebarSection>
            <LargeSidebarItem isActive IconOrImgUrl={Home} title="Home" url="/"/>
            <LargeSidebarItem IconOrImgUrl={Repeat} title="Shorts" url="/shorts"/>
            <LargeSidebarItem IconOrImgUrl={Clapperboard} title="Subscriptions" url="/subscriptions"/>
            <LargeSidebarItem IconOrImgUrl={Music} title="Music" url="/music"/>
        </LargeSidebarSection>
        <LargeSidebarSection title="You" visibleItemCount={6}>
            <LargeSidebarItem IconOrImgUrl={User} title="Your channel" url="/channel"/>
            <LargeSidebarItem IconOrImgUrl={History} title="History" url="/history"/>
            <LargeSidebarItem IconOrImgUrl={PlaySquareIcon} title="Your videos" url="/videos"/>
            {playlists.map((playlist) =>(
              <LargeSidebarItem key={playlist.id} IconOrImgUrl={ListVideo} title={playlist.name} url={`/playlist/${playlist.id}`}/>
            ))}
        </LargeSidebarSection>
        <LargeSidebarSection title="Subscriptions" visibleItemCount={7}>
            {subscriptions.map((subscription) =>(
              <LargeSidebarItem key={subscription.id} IconOrImgUrl={subscription.imgUrl} title={subscription.channelName} 
              url={`/@${subscription.id}`}/>))}
        </LargeSidebarSection>
        <LargeSidebarSection title="Explore">
          <LargeSidebarItem IconOrImgUrl={Flame} title="Trending" url="/trending"/>
          <LargeSidebarItem IconOrImgUrl={ShoppingBag} title="Shopping" url="/shopping"/>
          <LargeSidebarItem IconOrImgUrl={Music2} title="Music" url="/music" />
          <LargeSidebarItem IconOrImgUrl={Film} title="Movies & TV" url="/movies-tv"/>
          <LargeSidebarItem IconOrImgUrl={Radio} title="Live" url="/live" />
          <LargeSidebarItem IconOrImgUrl={Gamepad2} title="Gaming" url="/gaming" />
          <LargeSidebarItem IconOrImgUrl={Newspaper} title="News" url="/news" />
          <LargeSidebarItem IconOrImgUrl={Trophy} title="Sports" url="/sports"/>
          <LargeSidebarItem IconOrImgUrl={Lightbulb} title="Learning" url="/learning"/>
          <LargeSidebarItem IconOrImgUrl={Shirt}title="Fashion & Beauty"url="/fashion-beauty"/>
          <LargeSidebarItem IconOrImgUrl={Podcast} title="Podcasts" url="/podcasts"/>
        </LargeSidebarSection>


    </div>
    </>
  )
}

export default Sidebar