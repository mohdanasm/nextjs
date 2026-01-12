import styles from "./helpscard.module.css";
import Image from "next/image";

export default function HelpsCard() {
  return (
    <div className={styles.helpscardContainer}>
      <div className={styles.paragraphContainer}>
        <h1>Trademind helps</h1>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit
          perspiciatis fuga cupiditate excepturi possimus deserunt praesentium
          accusamus nostrum illum minima, nisi animi aliquam unde esse maiores
          cum, maxime mollitia dolore.
        </p>
      </div>

      <div className={styles.imageContainer}>
        <Image
          src="/images/trademindsSolution.jpg"
          alt="TradeMinds Solution"
          width={500}
          height={350}
        />
      </div>
    </div>
  );
}
