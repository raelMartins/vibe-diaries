import Head from 'next/head';
import Image from 'next/image';
import { FiSearch } from 'react-icons/fi';
import { FaHome } from 'react-icons/fa';
import {
  BsPlayBtn,
  BsThreeDotsVertical,
  BsChatSquareText
} from 'react-icons/bs';
import { MdOutlineShoppingBasket } from 'react-icons/md';
import { RiNotificationLine } from 'react-icons/ri';
import { VscGlobe } from 'react-icons/vsc';
import styles from '../styles/home.module.scss';
import Navbar from 'components/Navbar';
import LeftSideFilter from 'components/LeftSideFilter';

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <Head>
        <title>Vibe Diaries</title>
        <meta name='description' content='A social etworking application' />
        <link rel='icon' href='/logo/vd-test-logo.png' />
      </Head>
      <main className={styles.main}>
        {/* <header className={styles.navbar}>
          <div className={styles.logo}>VD</div>
          <div className={styles.searchBox}>
            <span>
              <FiSearch />
            </span>
            <span>
              <input type='text' placeholder='Search for Vibes...' />
            </span>
          </div>
          <nav className={styles.navigation}>
            <a>
              <FaHome />
              <div className={styles.selected}>
                <span style={{ transform: 'scale(1)' }}></span>
              </div>
            </a>
            <a>
              <BsPlayBtn />
              <div className={styles.selected}>
                <span></span>
              </div>
            </a>
            <a>
              <MdOutlineShoppingBasket />
              <div className={styles.selected}>
                <span></span>
              </div>
            </a>
            <a>
              <BsChatSquareText />
              <div className={styles.selected}>
                <span></span>
              </div>
            </a>
            <a>
              <RiNotificationLine />
              <div className={styles.selected}>
                <span></span>
              </div>
            </a>
          </nav>
          <div className={styles.userAccount}>
            <span>
              <img src='/images/profile-photo-1.jpg' alt='Profile Photo' />
            </span>
            <span className={styles.accountName}>Folashade Blessing</span>
          </div>
          <div className={styles.otherInfo}>
            <span>Donate</span>
            <span>
              <VscGlobe />
            </span>
            <span>
              <BsThreeDotsVertical />
            </span>
          </div>
        </header> */}
        <Navbar />
        <div className={styles.container}>
          <LeftSideFilter />
          <section></section>
          <section></section>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
