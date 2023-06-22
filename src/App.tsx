import Navbar from '@/scenes/navbar/index'
import { useState, useEffect } from 'react'
import { SelectedPage } from "@/shared/types";
import Home from '@/scenes/home'
import Benefits from '@/scenes/benefits'
import OurClasses from '@/scenes/ourClasses'
import ContactUs from '@/scenes/contactUs';
import Footer from '@/scenes/footer'



function App() {
  const [selectedPage, setSelectedPage] = useState<SelectedPage>(SelectedPage.Home); // using the enum to set the default page
  const [isTopOfPage, setIsTopOfPage] = useState<boolean>(true); // for the color toggle when scrolling
  // this useEffect is to handle the color change when at top
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true)
        setSelectedPage(SelectedPage.Home);
      }
      if (window.scrollY !== 0) setIsTopOfPage(false)
    }
    window.addEventListener('scroll', handleScroll) // add event listener
    return () => window.removeEventListener('scroll', handleScroll) // remove event listener
  }, []);



  return <div className="app bg-gray-20">
        <Navbar isTopOfPage={isTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage} />      
      <Home setSelectedPage={setSelectedPage} />
      <Benefits setSelectedPage={setSelectedPage} />
      <OurClasses setSelectedPage={setSelectedPage} />
      <ContactUs setSelectedPage={setSelectedPage} />
      <Footer />

  </div>
}

export default App
