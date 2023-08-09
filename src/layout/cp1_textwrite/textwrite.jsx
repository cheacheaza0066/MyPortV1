// import React from 'react'

import TextWriter from "../../components/textwriter/TextWriter";
import styles from "./textwrite.module.css";
function TextWrite() {
  return (
    <div className={styles.main}>
      <div className={styles.left}>
        <h1>LOVE</h1>
        <div className={styles.lefteffect}>
            <h1>
            <TextWriter />

            </h1>
        </div>
      </div>
      <div className={styles.right}>
        <h1>
          <TextWriter />
        </h1>
      </div>
    </div>
  );
}

export default TextWrite;
