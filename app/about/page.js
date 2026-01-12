import Header from "@/components/header";
import styles from "./about.module.css";
export default function About() {

  return (
    <>
        <section className={styles.about}>
      <h1>About Us</h1>

      <p className={styles.intro}>
        We are passionate about helping learners grow with practical,
        easy-to-understand education.
      </p>

      <div className={styles.block}>
        <h2>Our Mission</h2>
        <p>
          To make learning simple, effective, and career-focused for everyone.
        </p>
      </div>

      <div className={styles.block}>
        <h2>What We Do</h2>
        <p>
          We build courses, tools, and learning paths designed for real-world
          success.
        </p>
      </div>
    </section></>

  );
}
