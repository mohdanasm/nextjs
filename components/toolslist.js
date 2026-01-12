import styles from "./toolslist.module.css";
import Image from "next/image";

export default function ToolsList() {
  return (
    <div className={styles.toolslistContainer}>
      <h1 className={styles.toolsTitle}>
        Here are a few tools <br /> we can share with you
      </h1>

      <div className={styles.toolsGrid}>
        {Array.from({ length: 10 }).map((_, index) => (
          <div key={index} className={styles.toolCard}>
            <Image
              src={`/images/icon${index + 1}.svg`}
              alt={`Tool icon ${index + 1}`}
              width={48}
              height={48}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
