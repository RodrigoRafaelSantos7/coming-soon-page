import React from "react";

//Import clock
import FlipClockCountdown from "@leenguyen/react-flip-clock-countdown";

//Clock css
import "@leenguyen/react-flip-clock-countdown/dist/index.css";

//import video
import VideoBg from "../src/assets/video.mp4";

//import css
import "./styles.css";

const App = () => {
  return (
    <section className="page">
      {/* Overlay */}
      <div className="overlay"></div>
      {/* Video */}
      <video src={VideoBg} autoPlay loop muted></video>
      {/* Content */}
      <div className="page__content">
        <h1>Launching Soon</h1>
        <h3>
          Leave your email and we'll let you know once the site goes live.
        </h3>
        <FlipClockCountdown
          to={new Date().getTime() + 24 * 3600 * 1000 + 5000}
          className="flip-clock"
          labels={["DAYS", "HOURS", "MINUTES", "SECONDS"]}
          duration={0.5}
        />
        <form action="https://api.web3forms.com/submit" method="POST">
          <input type="hidden" name="access_key" value="b25df7ee-27e9-4420-8041-c33d1f2d0875"/>
          <input type="email" className="email" required /> {/* Button */}
          <div class="h-captcha" data-captcha="true"></div>
          <button className="btn" type="submit">
            Notify Me
          </button>
        </form>
        <script
          src="https://web3forms.com/client/script.js"
          async
          defer
        ></script>
      </div>
    </section>
  );
};

export default App;
