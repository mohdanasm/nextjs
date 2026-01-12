import styles from "./footer.module.css";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerInner}>

        {/* LOGO */}
        <div className={styles.logoContainer}>
          <Image
            src="/images/samplelogo.jpg"
            alt="TradeMinds Logo"
            width={160}
            height={60}
            priority
          />
        </div>

        {/* NAV LINKS */}
        <nav className={styles.footerNavlinks}>
          <h2>Links</h2>
          <Link href="/">Home</Link>
          <Link href="/about">About Us</Link>
          <Link href="/services">Services</Link>
          <Link href="/tools">Tools</Link>
          <Link href="/blogs">Blogs</Link>
          <Link href="/contact">Contact Us</Link>
        </nav>

        {/* CONTACT */}
        <div className={styles.contactContainer}>
          <h2>Contact</h2>

          <div className={styles.contactItem}>
            <Image src="/images/Vector.svg" alt="Phone" width={20} height={20} />
            <span>+91 81221 76424</span>
          </div>

          <div className={styles.contactItem}>
            <Image src="/images/website.svg" alt="Website" width={20} height={20} />
            <span>www.trademindsacademy.in</span>
          </div>

          <div className={styles.contactItem}>
            <Image src="/images/address.svg" alt="Address" width={20} height={20} />
            <span>
              No. 40, Periyar Nagar East,<br />
              Masakalipalayam,<br />
              Coimbatore - 641015
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
