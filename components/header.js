import styles from "./header.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.logo}>
        <Image
          src="/images/samplelogo.jpg"
          alt="Trade Minds Academy"
          width={140}
          height={50}
          className={styles.logoImage}
          priority
        />
      </div>

      <nav className={styles.navLinks}>
        <Link href="/" className={styles.active}>Home</Link>
        <Link href="/about">About Us</Link>
        <Link href="/services">Services</Link>
        <Link href="/tools">Tools</Link>
        <Link href="/blogs">Blogs</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>

      <button className={styles.ctaBtn}>
        <span className={styles.icon}>📞</span>
        Get In Touch
      </button>
    </header>
  );
}
