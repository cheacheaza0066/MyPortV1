import CardWork from "../../components/Card/CardWork";
import styles from "./MyWork.module.css";
import cardData from "./data";
function MyWork() {
  return (
    <div className={styles.main}>
        <div className={styles.top}>
            {/* <h1 className={styles.head}>good website is a website that is both beautiful and answers the question</h1> */}
            <h1 className={styles.head}>This is an example of my work</h1>

            {/* <h1 className={styles.head2}>↓</h1> */}

            {/* <p className="text-secondary fs4 fw-bold mt-3">this is all my project i build Using react </p> */}
        </div>
        <div className={styles.MyProject}>
        {cardData.map((card, index) => (
                <CardWork key={index} {...card} />
            ))}
        </div>
    </div>
  )
}

export default MyWork
