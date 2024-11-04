// components/Navbar.tsx

import Link from 'next/link';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Bloodgroup Detector</div>
      <ul className={styles.navLinks}>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/login">Login</Link></li>
        <li><Link href="/signup">Sign Up</Link></li>
        <li><Link href="/accuracy">Accuracy</Link></li>
      </ul>
      <button className={styles.getStarted}>Get Started</button>
    </nav>
  );
}
