import React from "react";
import Typed from "typed.js";

function TypingAnimation() {
  const el = React.useRef(null);

  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        "Green Controlling sind mehr als <span class='highlight'>Zahlen</span>",
        "Green Controlling ist mehr als <span class='highlight'>Nachhaltigkeit</span>",
        "Green Controlling ist <span class='highlight'>Zukunft</span>",
      ],
      typeSpeed: 50,
      backSpeed: 30,
      loop: true,
      cursorChar: "|",
      contentType: "html",
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div className="typing-animation">
      <h1 ref={el} />
    </div>
  );
}

export default TypingAnimation;
