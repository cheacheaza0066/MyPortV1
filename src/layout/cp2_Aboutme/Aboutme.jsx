import styles from './Aboutme.module.css';

function Aboutme() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>Thanin Pitakpoolsin</h1>
        <h2>Automation Engineering</h2>
        <p>I am build a WebApplication with React</p>
      </div>
      <div className={styles.right}>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus repellat molestias similique. A quisquam, sunt placeat sit recusandae libero? Voluptates nemo blanditiis dolorum temporibus vel. Illo aliquid consequatur ullam unde!</p>
      </div>
    </div>
  );
}

export default Aboutme;
