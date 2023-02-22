import { useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  //determines what page we are at
  const [seletedPage, setSelectedPage] = useState('home');
  //checks if current screensize is above or below 1060px
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-deep-blue">
      <Navbar seletedPage={seletedPage} setSelectedPage={setSelectedPage}/>
    </div>
  );
}

export default App;
