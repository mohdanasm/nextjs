import styles from "./growthmap.module.css";
import Image from "next/image";

export default function GrowthMap() {
  return (
    <section className={styles.growthmapcontainer}>
      <h1>The struggles MSME owners face</h1>

      <div className={styles.divcontainer}>
        <div className={styles.box}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/difficulttomanage.svg"
              alt="Difficult to manage"
              width={40}
              height={40}
            />
          </div>
          <p>Difficult to manage</p>
        </div>

        <div className={styles.box}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/everytask.svg"
              alt="Doing every task"
              width={40}
              height={40}
            />
          </div>
          <p>Doing every task</p>
        </div>

        <div className={styles.box}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/nosystem.svg"
              alt="No system"
              width={40}
              height={40}
            />
          </div>
          <p>No system</p>
        </div>

        <div className={styles.box}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/norealteam.svg"
              alt="No real team"
              width={40}
              height={40}
            />
          </div>
          <p>No real team</p>
        </div>

        <div className={styles.box}>
          <div className={styles.iconCircle}>
            <Image
              src="/images/salesdown.svg"
              alt="Sales down"
              width={40}
              height={40}
            />
          </div>
          <p>Sales down</p>
        </div>
      </div>

      <button className={styles.ctaBtn}>View Growth Map</button>
    </section>
  );
}
