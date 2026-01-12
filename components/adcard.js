import styles from "./adcard.module.css";
export default function AdCard() {
  return (
    <div className={styles.adcardContainer}>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt
        cupiditate molestiae modi pariatur, laudantium quibusdam quas mollitia
        aliquid placeat at unde voluptatibus exercitationem debitis itaque
        facere nulla asperiores consequuntur veritatis?
      </p>

      <button className={styles.bookBtn}>
        Book your
      </button>
    </div>
  );
}
