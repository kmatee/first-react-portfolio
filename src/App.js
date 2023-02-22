import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup"

function App() {
  //determines what page we are at
  const [seletedPage, setSelectedPage] = useState('home');
  const [istTopOfPage, setisTopOfPage] = useState(true);
  //checks if current screensize is above or below 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) setisTopOfPage(true)
      if (window.scrollY !== 0) setisTopOfPage(false)
    }
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="app bg-deep-blue">
      <Navbar istTopOfPage={istTopOfPage} seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            seletedPage={seletedPage}
            setSelectedPage={setSelectedPage}  
          />
        )}
      </div>
    </div>
    
  );
}

export default App;
