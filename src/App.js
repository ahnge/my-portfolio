import About from "./componants/About";
import Contact from "./componants/Contact";
import DL from "./componants/DL";
import Intro from "./componants/Intro";
import Products from "./componants/Products";
import { useEffect, useRef } from "react";
import { useGlobalcontext } from "./context";

function App() {
  const { setAppPageTag } = useGlobalcontext();
  const appPage = useRef();

  useEffect(() => {
    setAppPageTag(appPage.current);
    console.log("appPage Tag setted");
  }, []);

  return (
    <div className=" font-pop relative" ref={appPage}>
      <DL />
      <Intro />
      <About />
      <Products />
      <Contact />
    </div>
  );
}

export default App;
