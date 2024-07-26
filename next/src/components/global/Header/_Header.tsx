'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import styles from './Header.module.scss';

type HeaderTypes = {
  logo: JSX.Element;
};

export default function _Header({ logo }: HeaderTypes) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function setHeaderBackground() {
      if ((isActive && window.scrollY >= 80) || (!isActive && window.scrollY < 80)) return;
      if (window.scrollY >= 80) setIsActive(true);
      else setIsActive(false);
    }

    window.addEventListener('scroll', setHeaderBackground);
    function dispatch() {
      window.removeEventListener('scroll', setHeaderBackground);
    }

    return dispatch;
  }, [isActive]);
  return (
    <header className={styles.header} data-active={isActive}>
      <div className='max-width'>
        <Link href='#root' aria-label='Przejdź na górę strony'>
          {logo}
        </Link>
      </div>
    </header>
  );
}