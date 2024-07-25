import styles from './Header.module.scss';
import _Header from './_Header';

export default function Header() {
  return (
    <>
      <a href='#main' className={styles.skipToMainContent}>
        Przejdź do głównej treści
      </a>
      <_Header logo={LaikKnowsLogo} />
    </>
  );
}

const LaikKnowsLogo = (
  <svg width='325' height='276' viewBox='0 0 325 276' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path
      d='M3.589 91.38V.463H22.42v74.29h49.744V91.38H3.59ZM79.643 91.38 117.05.463h21.69l37.016 90.915h-20.392l-9.221-23.897h-37.535l-9.352 23.897H79.643Zm34.808-38.964h25.976l-12.988-33.51-12.988 33.51ZM191.265 91.38V.463h18.833v90.915h-18.833ZM234.445 91.38V.463h18.833v40.652L293.021.464h22.989l-44.16 43.25 46.238 47.665h-25.197l-39.613-42.21v42.21h-18.833ZM.086 178.733v-56.478h13.877v24.689l22.834-24.689h16.782l-26.142 26.544 27.594 29.934H36.635l-22.672-25.899v25.899H.086ZM57.229 178.733v-56.478h13.07l25.658 32.757v-32.757h13.07v56.478H96.763L70.3 144.685v34.048H57.23ZM147.337 179.62c-4.25 0-8.203-.726-11.861-2.178-3.657-1.506-6.858-3.577-9.601-6.213a30.005 30.005 0 0 1-6.455-9.278c-1.506-3.55-2.259-7.369-2.259-11.457 0-4.088.753-7.88 2.259-11.376 1.56-3.551 3.712-6.643 6.455-9.279 2.743-2.689 5.944-4.76 9.601-6.213 3.658-1.506 7.611-2.259 11.861-2.259 4.249 0 8.202.753 11.86 2.259 3.658 1.453 6.858 3.524 9.601 6.213 2.743 2.636 4.868 5.728 6.374 9.279 1.56 3.496 2.34 7.288 2.34 11.376 0 4.088-.78 7.907-2.34 11.457a28.882 28.882 0 0 1-6.374 9.278c-2.743 2.636-5.943 4.707-9.601 6.213-3.658 1.452-7.611 2.178-11.86 2.178Zm0-12.748c2.259 0 4.356-.403 6.293-1.21 1.936-.86 3.604-2.017 5.002-3.469 1.452-1.452 2.582-3.174 3.389-5.164.807-2.044 1.21-4.222 1.21-6.535 0-2.367-.403-4.545-1.21-6.536-.807-1.99-1.937-3.711-3.389-5.163-1.398-1.453-3.066-2.582-5.002-3.389-1.937-.861-4.034-1.291-6.293-1.291-2.26 0-4.357.43-6.294 1.291a15.597 15.597 0 0 0-5.083 3.389c-1.398 1.452-2.501 3.173-3.308 5.163-.807 1.991-1.21 4.169-1.21 6.536 0 2.313.403 4.491 1.21 6.535.807 1.99 1.91 3.712 3.308 5.164a16.725 16.725 0 0 0 5.083 3.469c1.937.807 4.034 1.21 6.294 1.21ZM194.278 178.733l-12.586-56.478h14.281l6.858 34.855 9.843-34.855h12.99l9.843 34.855 6.858-34.855h13.797l-12.586 56.478h-14.685l-9.924-35.985-10.004 35.985h-14.685ZM283.512 179.54c-4.572 0-9.09-.834-13.554-2.502-4.465-1.667-8.445-3.98-11.941-6.938l7.745-10.086c3.443 2.797 6.616 4.814 9.521 6.052 2.904 1.183 5.997 1.775 9.278 1.775 2.152 0 3.981-.216 5.487-.646 1.506-.43 2.662-1.049 3.469-1.856.807-.86 1.21-1.855 1.21-2.985 0-1.56-.591-2.77-1.775-3.631-1.183-.86-3.2-1.533-6.051-2.017l-12.425-2.178c-4.572-.807-8.095-2.555-10.57-5.244-2.474-2.69-3.711-6.105-3.711-10.247 0-3.658.914-6.804 2.743-9.44 1.883-2.636 4.545-4.653 7.988-6.051 3.496-1.399 7.638-2.098 12.425-2.098 4.196 0 8.418.726 12.667 2.178 4.25 1.399 7.934 3.362 11.054 5.89l-7.342 10.247c-5.81-4.464-11.592-6.697-17.347-6.697-1.883 0-3.523.215-4.922.646-1.345.376-2.393.941-3.146 1.694-.7.699-1.049 1.56-1.049 2.582 0 1.398.511 2.474 1.533 3.227 1.075.753 2.797 1.345 5.163 1.775l11.699 1.937c5.433.86 9.548 2.662 12.345 5.405 2.851 2.744 4.276 6.294 4.276 10.651 0 3.819-.995 7.127-2.985 9.924-1.99 2.743-4.841 4.867-8.553 6.374-3.711 1.506-8.122 2.259-13.232 2.259Z'
      fill='#fff'
    />
    <path
      d='M.086 211.006c.16-34 62.4-47.6 62.4-3.52 0 31.04-42.88 26.32-46.72 25.04l-.8-.24c-5.6 9.44-10.48 17.68-11.44 19.44-.4 1.12-2.24 1.2-2-.72 1.12-3.84 6.64-16.4 12.72-28.48-7.68.56-13.84-1.84-14.16-10.8v-.72Zm41.92 1.2c-2.64 2.24-11.68 6.88-20.64 9.2l-5.04 8.56 1.28.48c4.72 2.16 40 1.52 40-22.64 0-40.96-55.44-26.64-55.44 3.2 0 8.08 6 9.92 13.36 9.04 5.12-10.08 10.4-19.36 13.68-22.48 2-1.92 2.48-1.52 4.48-1.12.64.24.96.8.96 1.76 0 .4-5.28 9.6-11.52 20.16 7.52-2.16 14.88-5.76 18-7.68 1.12-.72 1.6 1.12.88 1.52ZM63.885 242.526c0-2.48 15.04-8.64 14.48-10.8-.56-2-.72-3.76-2.72-4.88-1.04-.56-9.2 4.24-11.36 5.76-1.04.72-2.16-1.44-.88-2.16 3.12-1.68 13.52-9.52 16.48-7.04 2.64 2.24 5.6 5.84 4.64 8.32-1.44 3.68-9.6 7.76-14.24 11.36-4.4 3.44 28.16-8.8 35.84-13.04.64-.32 1.12 1.2.88 1.44-4.48 4.72-38.24 15.52-38.48 15.52-.88 0-4.64-2.16-4.64-4.48Z'
      fill='#E60019'
    />
    <path
      d='M133.375 230.366c0 .32-.08.64-.32.96-.24.4-.64.72-1.2.96-.8.4-1.92.88-3.28 1.52-1.36.72-2.96 1.36-4.64 2.08-1.68.64-3.52 1.2-5.36 1.76-1.84.48-3.6.8-5.36.8-1.6 1.6-3.6 3.12-6 4.32a16.08 16.08 0 0 1-7.68 1.92c-1.6 0-2.72-.48-3.44-1.36-.72-.88-1.04-2-.96-3.36.08-1.44.56-2.88 1.36-4.48.8-1.52 1.92-3.04 3.36-4.4 1.44-1.36 3.12-2.48 5.04-3.44 1.92-.88 4-1.36 6.32-1.36 1.68 0 2.96.32 3.92.88.96.48 1.6 1.2 1.84 2.08.32.8.32 1.84.08 2.96-.32 1.12-.88 2.32-1.6 3.44 1.12 0 2.4-.24 3.92-.64 1.52-.48 2.96-.96 4.48-1.52 1.44-.56 2.8-1.2 4.08-1.76 1.28-.64 2.32-1.12 3.12-1.44.72-.4 1.28-.48 1.68-.4.4.08.56.24.64.48Zm-21.76 1.52c.64-.24 1.36-.32 2-.24-.16-.96-1.04-1.44-2.48-1.44-2.32 0-4.48.64-6.16 1.92-1.76 1.2-3.04 2.64-3.84 4.16-.88 1.6-1.28 2.96-1.2 4.24.08 1.28.72 1.92 2 1.92 1.6 0 3.12-.48 4.72-1.44 1.6-.88 2.96-2 4.08-3.28-.24-.08-.56-.24-.8-.48s-.4-.4-.56-.72c-.48-.56-.64-1.12-.56-1.76.16-.64.48-1.2.96-1.68.48-.56 1.12-.96 1.84-1.2Z'
      fill='#E60019'
    />
    <path
      d='M178.967 192.686c2.72 0-.56 5.76-1.12 6.64-7.12 10.88-17.28 19.52-28.56 28.96-.88 1.28-6.96 8.8-6.64 10.96.08.48.48.56 1.28.56 3.76 0 15.76-5.6 22.72-9.76 1.68-1.04 2 .56.72 1.84-5.44 3.6-19.6 10.24-26.8 11.2-1.52.24-4.72.32-4.88-1.92-.16-1.92 1.36-3.04 2.72-5.2-4.96 3.44-10.48 8.08-17.12 8.08-4.24 0 5.12-18.72 18.08-24.08 3.6-1.52 7.36-.4 9.44 1.44 8.4-11.52 19.68-28.72 30.16-28.72Zm-32.56 32.16c-1.12-.48-2.16-.72-3.28-.64-4.4.32-15.28 11.04-15.68 15.68 3.44 0 10.08-5.92 18.96-15.04Zm28.32-24.48c.72-.96 3.2-4.64 2.08-4.64-.8 0-2 .64-3.36 1.84-7.44 6.64-13.2 15.28-20.16 25.04 7.68-6.48 15.04-13.84 21.44-22.24Z'
      fill='#E60019'
    />
    <path
      d='M202.761 230.286c0 .32-.16.64-.4 1.04-.32.48-.8.88-1.44 1.28-.24.08-.88.48-2 1.04s-2.56 1.28-4.24 2.16c-1.68.8-3.44 1.68-5.44 2.64-2 .96-3.92 1.84-5.76 2.64-1.92.8-3.6 1.44-5.12 2-1.52.48-2.72.72-3.44.72-.8 0-1.36-.08-1.6-.24-.32-.24-.4-.56-.24-1.12.08-.48.4-1.12.88-2 .48-.88 1.12-2 1.92-3.44-1.84 1.52-3.6 2.8-5.36 4-1.44.96-3.12 1.76-4.8 2.48-1.76.72-3.36.88-4.8.48-.88-.16-1.28-.64-1.36-1.44-.08-.72.16-1.6.56-2.56.4-1.04.96-2.08 1.68-3.28.64-1.12 1.36-2.16 2-3.04.64-.96 1.2-1.76 1.6-2.32.4-.56.56-.88.4-.8-.4.16-.96.4-1.6.72-.56.32-1.28.64-2.24 1.04-.4.24-.72.24-.96.16-.32-.08-.48-.24-.48-.48-.08-.24 0-.56.24-.8.16-.32.48-.64.88-.88.72-.4 1.68-.88 2.72-1.44 1.36-.64 8.16-6.64 9.28-6.72 1.04-.16 1.84-.08 2.4.24.4.24.48.72.16 1.52-.32.72-.88 1.68-1.52 2.8-.72 1.04-4.4 6.8-5.28 8-.8 1.12-1.52 2.16-2.16 3.12-.64.96-1.04 1.76-1.28 2.32-.24.56-.08.8.48.64 1.76-.4 3.6-1.44 5.6-2.96 2-1.52 3.84-3.04 5.68-4.64 1.84-1.6 6.48-7.6 8-8.72 1.44-1.12 2.56-1.44 3.28-1.04.24.08.16.48-.16 1.12-.32.72-.8 1.52-1.36 2.48s-4.16 6.56-4.88 7.68c-.72 1.04-1.36 2-1.92 2.88-.64.88-1.12 1.6-1.44 2.24-.32.56-.4.8-.24.8.72-.16 1.68-.48 2.96-1.04 1.2-.48 2.64-1.12 4.08-1.84 1.52-.64 3.04-1.44 4.64-2.24 1.6-.8 3.12-1.52 4.48-2.24 1.36-.72 2.56-1.36 3.6-1.92.96-.56 1.6-.88 1.92-1.04.64-.4 1.2-.56 1.52-.48.32.08.48.24.56.48Z'
      fill='#E60019'
    />
    <path
      d='M236.949 230.046c0 .24-.08.48-.24.8-.24.32-.56.72-1.12 1.04-.32.24-1.04.72-2.24 1.44-1.12.72-2.48 1.52-4.16 2.48-1.6.96-3.44 2-5.36 2.96-2 1.04-3.92 2-5.92 2.88-2 .88-3.84 1.6-5.68 2.16-1.76.64-3.36.88-4.64.88-2.08 0-3.52-.48-4.32-1.36-.88-.88-1.44-1.92-1.6-2.96-.24-1.28-.24-2.72.16-4.32.08-.4.24-.72.48-.96.08-.24.24-.4.56-.48.32-.16.56-.24.96-.32h.96c1.44 1.12 11.2-4.96 10.64-6.56-.56-2.08-11.44 4.88-12.56 5.76-1.6 1.28-3.2 2.64-4.8 4-1.52 1.44-2.88 2.72-3.92 3.76-.96 1.52-1.6 2.24-1.92 2.4-.32.08-.64.16-1.04.16-.48 0-.88 0-1.28-.16-.32-.08-.64-.24-.88-.48-.24-.32-.32-.64-.24-1.12.08-.32.48-1.04 1.2-2.24.8-1.2 1.76-2.64 2.96-4.48 1.2-1.76 2.56-3.76 4.08-6 1.6-2.16 3.2-4.48 4.88-6.8 1.68-2.4 3.36-4.72 5.04-7.04 1.68-2.32 3.28-4.48 4.72-6.48 4.64-6.48 8.56-10.96 11.92-13.6 3.36-2.56 6.16-3.6 8.48-3.04.88.24 1.12.96.88 2.24-.24 1.28-1.04 2.88-2.24 4.88-1.2 2-2.8 4.24-4.8 6.72-2 2.48-4.16 5.12-6.72 7.84-2.48 2.72-5.12 5.44-8.08 8.16-2.88 2.72-5.84 5.2-8.8 7.6l-3.04 4.4c1.04-.96 2.16-1.92 3.44-2.88 3.12-2.48 11.36-7.36 14.96-7.36 2.08 0 3.44.48 3.92 1.44.56.96.48 2.08-.32 3.28-.8 1.2-4.96 4.4-6.96 5.44-2 1.12-4.48 1.76-7.44 2 0 .56 0 1.2.08 1.84 0 .64.24 1.28.48 1.84.32.48.8.96 1.44 1.28.56.32 1.44.48 2.56.48.8 0 2-.24 3.44-.72 1.44-.56 2.96-1.2 4.64-2 1.6-.8 3.28-1.68 5.04-2.64 1.76-.96 3.36-1.84 4.8-2.72 1.52-.88 2.8-1.6 3.84-2.24 1.12-.64 1.76-1.04 2.16-1.2.48-.24.8-.4 1.12-.32.24 0 .4.08.48.32Zm-25.68-13.52-5.28 7.84c2.08-1.76 4.16-3.76 6.32-5.84 2.08-2.16 4.16-4.24 6.16-6.4 1.92-2.16 3.76-4.24 5.36-6.32 1.68-2 3.04-3.84 4.08-5.36 1.04-1.52 1.76-2.8 2.08-3.68.4-.88.24-1.36-.32-1.36-.88 0-2 .64-3.44 2-1.44 1.36-2.96 3.04-4.72 5.12-1.68 2-3.44 4.32-5.2 6.8-1.84 2.48-3.44 4.88-5.04 7.2Z'
      fill='#E60019'
    />
    <path
      d='M267.954 230.046c1.04-.48 1.68.88.88 1.52-4.32 3.44-21.68 10.08-27.04 11.52-13.6 3.68-16.88 2.16-16.88-1.12 0-6.16 11.68-22.56 22-22.56 4.4-.08 6.48 3.36 6.48 5.76 0 1.12-1.36 2.08-2.48.56-5.36-8.56-18.56 7.2-18.56 14.32 0 3.12 5.44 1.92 12.72-.24 4.32-1.28 18.16-7.6 22.88-9.76Z'
      fill='#E60019'
    />
    <path
      d='M291.642 230.046c1.04-.48 1.68.88.88 1.52-3.84 3.04-20.96 9.68-28.64 11.2-1.92 2.8-3.92 5.52-5.92 8.4l-6.16 8.48c-2.24 3.2-4.4 5.92-6.24 8-1.92 2.16-3.6 3.84-5.2 5.12-1.52 1.2-2.96 2.08-4.24 2.48-1.28.4-2.48.48-3.68.16-1.12-.4-1.44-1.68-.96-3.84s1.76-4.8 3.92-8c2.16-3.12 5.12-6.56 8.96-10.24 3.84-3.76 8.56-7.28 14.08-10.72l4.08-6.08c1.36-2 2.56-3.76 3.68-5.2l-1.44.56-.8.4c-.48.24-.88.32-1.12.24-.24-.16-.32-.4-.32-.64 0-.32.08-.64.32-1.04s.64-.72 1.2-.96l4.4-2.4c1.28-.72 2.48-1.04 3.6-1.2.56-.08 1.12-.08 1.6 0 .48.16.64.48.48 1.04 0 .4-.72 1.68-2.16 3.84-1.36 2.08-3.04 4.64-5.12 7.52l-.72.96c5.92-1.04 21.2-7.6 25.52-9.6Zm-38 19.76 1.68-2.56c-3.84 2.72-7.28 5.6-10.16 8.48-2.8 2.96-5.12 5.6-6.88 8-1.76 2.4-2.96 4.4-3.52 5.92-.56 1.52-.48 2.32.24 2.32.8 0 1.92-.56 3.2-1.84 1.36-1.2 2.8-2.72 4.32-4.64 1.6-1.92 3.2-4.08 4.88-6.48 1.68-2.32 3.28-4.72 4.8-7.04.48-.64.96-1.36 1.44-2.16Zm24.72-31.44c-.8 0-1.36-.32-1.68-1.04-.4-.64-.4-1.52-.16-2.56.24-.88.72-1.68 1.44-2.4.72-.64 1.52-.96 2.24-.96.8 0 1.36.32 1.68.96.4.72.48 1.52.24 2.4-.32 1.04-.8 1.92-1.52 2.56-.72.72-1.52 1.04-2.24 1.04Z'
      fill='#E60019'
    />
    <path
      d='M323.618 230.046c1.04-.48 1.68.88.88 1.52-4.32 3.44-21.52 11.44-27.04 11.52-4.08-.48-1.2-4.08.32-6.32-1.92 1.92-11.76 7.28-14.64 7.28-7.76 0 6.4-24.64 19.36-24.64 4.4-.08 7.68 3.12 7.68 5.52 0 1.92-2 2-3.12.48-6.48-8.08-22.4 14.64-19.04 14.64 2.08 0 14.48-11.6 16.64-11.04.96.48 1.52 1.76 1.52 2.88 0 1.12-7.28 7.84-5.44 7.92 4.48.16 18.16-7.6 22.88-9.76Z'
      fill='#E60019'
    />
  </svg>
);
