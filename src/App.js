import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import LineGradient from "./components/LineGradient";
import MySkills from "./scenes/MySkills";

function App() {
  //determines what page we are at
  const [selectedPage, setSelectedPage] = useState('home');
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
      <Navbar istTopOfPage={istTopOfPage} selectedPage={selectedPage} setSelectedPage={setSelectedPage}/>
      <div className="w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}  
          />
        )}
        <Landing setSelectedPage={setSelectedPage} />
      </div>
      <LineGradient  />
      <div className="w-5/6 mx-auto md:h-full">
          <MySkills />
      </div>
    </div>
    
  );
}

export default App;
