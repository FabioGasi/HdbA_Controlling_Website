import React from "react";
import videoBackground from "../assets/video_rechner.mp4";

export default function Calculator() {
  return (
    <section id="calculator-section" className="calculator-section">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="background-video"
      >
        <source
          src={videoBackground}
          type="video/mp4"
        />
      </video>
    </section>
  );
}
