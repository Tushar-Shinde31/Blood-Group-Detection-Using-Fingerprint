// components/HeroImage.tsx

import Image from 'next/image';
import styles from './HeroImage.module.css';

export default function HeroImage() {
  return (
    <div className={styles.heroContainer}>
      <Image
        src="/images/hero.jpg"
        alt="Hero Image"
        fill // Replaces 'layout="fill"'
        priority
        className={styles.heroImage}
      />
    </div>
  );
}
