import styles from "./Aboutme.module.css";

function Aboutme() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>Thanin Pitakpoolsin</h1>
        <h2>Automation Engineering</h2>
        <p>I am build a WebApplication with React</p>
      </div>

      <div className={styles.right}>
      <h5 className='mb-3'>About</h5>

        <div className={styles.about}>
          <p className="text-secondary fs4 fw-bold">
            Back in 2023, I decided to try my hand at creating custom Tumblr
            themes and tumbled head first into the rabbit hole of coding and web
            development. Fast-forward to today, and I’ve had the privilege of
            building software for an Automation Engineering
          </p>
        </div>
        <h5 className='mb-3'>Exprerien</h5>
        <div className={styles.Exprerien}>
          
                <div className={styles.date}>
                  <h3>2023 - present</h3>
                </div>
                <div className={styles.detail}>
                  <h3>Incontrol limited</h3>
                  <p className="text-secondary fs4 fw-bold">Automation Engineering</p>
                  <p className="text-secondary fs4 fw-bold">Developer ignition Scada system create program for client using python SQL and JS</p>

                </div>
                <a className="fs-5" href="#">View My Full Resume⭷</a>

        </div>
      </div>
    </div>
  );
}

export default Aboutme;
