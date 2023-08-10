import  { useContext } from "react";
import TextWriter from "../../components/textwriter/TextWriter";
import styles from "./textwrite.module.css";
import { HoverContext } from "../../services/HoverContext";


function TextWrite() {
  const { setIsHovered } = useContext(HoverContext);

  

  return (
      <div className={styles.main}>
        <div className={styles.left}  onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
          <h1>LOVE</h1>
          <div className={styles.lefteffect}>
            <h1>
              <TextWriter />
            </h1>
          </div>
        </div>
        <div className={styles.right} onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
          <h1>
            <TextWriter />
          </h1>
        </div>
      </div>
  );
}

export default TextWrite;
