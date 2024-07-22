import styles from './EmailBox.module.scss';
import type { EmailBoxTypes } from './EmailBox.types';

export default function EmailBox({ heading }: EmailBoxTypes) {
  return <div className={styles.box}>{heading}</div>;
}