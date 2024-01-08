import { useContext } from "react";
import styles from "./Aboutme.module.css";
import { HoverContext } from "../../services/HoverContext";

function Aboutme() {
  const { isHovered  } = useContext(HoverContext);

  console.log(isHovered);
  return (
    <div className={styles.main}>
      <div className={isHovered ? styles.leftHover : styles.left}>
      <h3>Hi there!</h3>

        <h1>I am Thanin Pitakpoolsin</h1>
        <h3>and This is My Resume</h3>
        {/* <p>I am build a WebApplication with React</p> */}
      </div>

      <div className={styles.right}>
        {/* <h5 className="mb-3">About</h5>

        <div className={styles.about}>
          <p className="text-secondary fs4 fw-bold">
            Back in 2023, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an Automation Engineering Back in 2023, I
            decided to try my hand at creating custom Tumblr themes and tumbled
            head first into the rabbit hole of coding and web development.
            Fast-forward to today, and I’ve had the privilege of building
            software for an Automation Engineering
          </p>
        </div> */}
        <h5 className="mb-3">Education</h5>
        <div className={styles.Exprerien}>
          <div className={styles.date}>
            <h3>2021 - 2023</h3>
          </div>
          <div className={styles.detail}>
            <h3>Rajamangala University Of Technology Thanyaburi</h3>
            <p className="text-secondary fs4 fw-bold">(Computer Engineering)</p>
         
          </div>
         
        </div>

        
        <h5 className="mb-3">Exprerien</h5>
        <div className={styles.Exprerien}>
          <div className={styles.date}>
            <h3>April 2023 - present</h3>
          </div>
          <div className={styles.detail}>
            <h3>Incontrol limited</h3>
            <p className="text-secondary fs4 fw-bold">Automation Engineering</p>
            <p className="text-secondary fs4 fw-bold">
              Developed a dashboard using the Ignition SCADA platform to display machine parameters and calculate OEE
            </p>
        
          </div>
         
        </div>

        <div className={styles.Exprerien}>
          <div className={styles.date}>
            <h3>April - June 2022</h3>
          </div>
          <div className={styles.detail}>
            <h3>T-NET Co.,Ltd</h3>
            <p className="text-secondary fs4 fw-bold">Internship Programmer</p>
            <p className="text-secondary fs4 fw-bold">
              Developed a Content Management System using PHP Laravel Framework
            </p>
        
          </div>
         
        </div>
         <a className="fs-5" href="https://drive.google.com/drive/folders/1l0SHR66QvsCEdzQyJaSB2GtdfUkNwnHr?usp=sharing">
            View My Full Resume⭷
          </a>
      </div>
    </div>
  );
}

export default Aboutme;
