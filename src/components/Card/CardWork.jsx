import Card from "react-bootstrap/Card";
import styles from "./CardWork.module.css";

// eslint-disable-next-line react/prop-types
// function CardWork({ image, title, link }) {
// eslint-disable-next-line react/prop-types
  function CardWork({ image, title }) {

  return (
    <div>
      {/* Use an anchor tag to wrap the Card */}
      {/* <a href={link} className={styles.cardLink}> */}
      <a  className={styles.cardLink}>

        <Card className={styles.card} style={{width: "40rem", border: "none", margin: "1rem" }}>
          <Card.Img variant="top" src={image} className={styles.image} />
          <Card.Body className={styles.body}>
            <Card.Title className={styles.title}>{title}</Card.Title>
          </Card.Body>
        </Card>
      </a>
    </div>
  );
}

export default CardWork;
