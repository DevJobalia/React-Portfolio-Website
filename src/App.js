import { useState } from "react";

import useMediaQuery from "./hooks/useMediaQuery";
import Navbar from "./scenes/Navbar";

function App() {
  const [seletectedPage, setSelectedPage] = useState("home");
  //checks if clients browser size greater than or lower than 1060
  const isAboveMediumScreen = useMediaQuery("(min-width: 1060px)");

  return (
    <div className="app bg-dep-blue">
      <Navbar
        seletectedPage={seletectedPage}
        setSelectedPage={setSelectedPage}
      />
    </div>
  );
}

export default App;
