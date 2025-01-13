import React, { useState, useEffect } from "react";
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import "./App.css";
import AppHeader from "./components/header.js";
import "bootstrap/dist/css/bootstrap.min.css";
import AppFooter from "./components/footer.js";
import Introduction from "./components/introduction.js";
import WhyGreenControlling from "./components/whyGreenControlling.js";
import Facts from "./components/facts.js";
import Concept from "./components/concept.js";
import Calculator from "./components/calculator.js";
import backgroundImage from "./assets/digital-art-isolated-house.jpg";

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll =
        document.documentElement.scrollHeight - window.innerHeight;
      const currentScroll = window.pageYOffset;
      const progress = (currentScroll / totalScroll) * 100;
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      <div
        className="scroll-indicator"
        style={{ width: `${scrollProgress}%` }}
      />
      <AppHeader />

      <Parallax pages={6}>
        <ParallaxLayer
          offset={0}
          speed={0}
          factor={6}
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        />

        <ParallaxLayer offset={0} speed={0.5}>
          <Introduction />
        </ParallaxLayer>

        <ParallaxLayer offset={1} speed={0.3}>
          <WhyGreenControlling />
        </ParallaxLayer>

        <ParallaxLayer offset={2} speed={0.4}>
          <Facts />
        </ParallaxLayer>

        <ParallaxLayer offset={3} speed={0.5}>
          <Concept />
        </ParallaxLayer>

        <ParallaxLayer offset={4} speed={0.2}>
          <Calculator />
        </ParallaxLayer>

        <ParallaxLayer offset={5} speed={0.1}>
          <AppFooter />
        </ParallaxLayer>
      </Parallax>
    </div>
  );
}

export default App;
