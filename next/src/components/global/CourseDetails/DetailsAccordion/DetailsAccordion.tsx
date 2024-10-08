'use client';

import { motion } from 'framer-motion';
import { useState } from 'react';
import { DetailsAccordionTypes } from '@/components/global/CourseDetails/CourseDetails.types';
import styles from './DetailsAccordion.module.scss';
import Form from './_Form';

export default function DetailsAccordion({ list, email }: DetailsAccordionTypes) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const handleClick = (e: React.MouseEvent<HTMLElement>, i: number) => {
    e.preventDefault();
    setOpenIndex(i === openIndex ? null : i);
  };
  return (
    <div className={styles.list}>
      {list.map(({ heading, video, paragraph, form, showForm }, i) => (
        <details key={i} open data-opened={openIndex === i}>
          <summary className={styles.summary} onClick={e => handleClick(e, i)} tabIndex={openIndex === i ? -1 : 0}>
            <header className={styles.header}>
              <div>
                <ArrowUp />
                <ArrowUp />
              </div>
              {heading}
            </header>
            <video src={video.asset.url} autoPlay muted />
          </summary>
          <motion.div
            className={styles.content}
            initial={{ height: i === 0 ? 'auto' : 0 }}
            animate={{ height: openIndex === i ? 'auto' : 0 }}
            exit={{ height: 0 }}
            transition={{
              duration: 0.3,
            }}
          >
            {paragraph}
            {showForm && <Form {...form} email={email} isOpen={openIndex === i} />}
          </motion.div>
        </details>
      ))}
    </div>
  );
}

const ArrowUp = () => (
  <svg xmlns='http://www.w3.org/2000/svg' width='25' height='24' fill='none'>
    <g stroke='#C3D5E2' strokeLinejoin='round' strokeWidth='1.001'>
      <path d='M12.5 4.5V20M9.5 7l3-3 3 3' />
    </g>
  </svg>
);
