import React from "react";
import "./home.css";
import "bootstrap/dist/css/bootstrap.css";
import ImgSwitch from "../imgswitch.jsx";
import { LuMonitorCheck } from "react-icons/lu";
import { GrCloudComputer } from "react-icons/gr";
import { MdAppSettingsAlt } from "react-icons/md";
import { MdOutlineComputer } from "react-icons/md";

export default function Home() {
  return (
    <div className="home">
      {/* Image Switcher Section */}
      <div>
        <ImgSwitch />
      </div>

      {/* Hero Section - Box 1 & 2 */}
      <div className="box">
        <div className="box1">
          <h1>Right Partner for Software Innovation</h1>
          <p>
            Arvat Software Solutions is a full-service Web development and software testing agency that puts its focus on achieving key business objectives, rather than just aesthetics or mere technical implementation. Conversions, transactions, engagement, usability, marketability, revenue, ROI, etc., are some very popular words at Arvat Software Solutions.
          </p>
        </div>

        <div className="box2">
          <img src="./img1.jpg" alt="Software Innovation" className="img1" />
        </div>
      </div>

      {/* Services Section - Box 3 */}
      <div className="box3">
        <div className="subbox">
          <LuMonitorCheck className="icons" />
          <h3>SAP</h3>
          <p>Our expertise in crafting responsive and dynamic websites ensures an impactful presence for your business.</p>
        </div>

        <div className="subbox">
          <GrCloudComputer className="icons" />
          <h3>Cloud</h3>
          <p>Unleash our software testing prowess to fortify your digital solutions with quality assurance and precision.</p>
        </div>

        <div className="subbox">
          <MdAppSettingsAlt className="icons" />
          <h3>App Development</h3>
          <p>Our company utilizes cloud technology to boost agility, lower infrastructure expenses, and rapid innovation.</p>
        </div>

        <div className="subbox">
          <MdOutlineComputer className="icons" />
          <h3>Web Development</h3>
          <p>Our web design services blend creativity and functionality to engage and convert online audiences.</p>
        </div>
      </div>

      {/* Working Process Section - Box 4 name was mis */}
      <div className="box5">
        <div className="box5sub1">
          <p>Our Working Process</p>
          <h3>How Our Services Will Help You to Grow Your Business</h3>
          <button className="contact">Contact</button>
        </div>

        <div className="box5sub2">
          <div className="box5sub3">
            <h3>Planning</h3>
            <p>We’re based in India, a global IT hub that contributes high-quality talent to the world at very competitive prices.</p>
          </div>

          <div className="box5sub3">
            <h3>Discovery</h3>
            <p>We’re based in India, a global IT hub that contributes high-quality talent to the world at very competitive prices.</p>
          </div>
        </div>

        <div className="box5sub2">
          <div className="box5sub3">
            <h3>Execute</h3>
            <p>Effective and free-flowing communication, through the advanced cloud-based partnering tools.</p>
          </div>

          <div className="box5sub3">
            <h3>Deliver</h3>
            <p>Effective and free-flowing communication, through the advanced cloud-based partnering tools.</p>
          </div>
        </div>
      </div>
      <p></p>


      {/* About Us Section - Box 5 */}
      <div>
        <div className="box4">
          <div className="box4sub1">
            <img src="./img6.png" alt="About Arvat" className="img6" />
          </div>

          <div className="box4sub2">
            <h6>About Us</h6>
            <h1>Right Partner for Software Innovation</h1>
            <p>
              Unlocking Success Together. Explore the key attributes and considerations to identify your ideal web development collaborator in this concise presentation.
            </p>

            <div>
              <h3>Experience</h3>
              <p>We’re based in India, a global IT hub that contributes high-quality talent to the world at very competitive prices.</p>
            </div>

            <div>
              <h3>Quick Support</h3>
              <p>Effective and free-flowing communication, through the advanced cloud-based partnering tools.</p>
            </div>
          </div>
        </div>
      </div>
      <p></p>
    </div>
  );
}