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
import styles from 'styles/navbar.module.scss';

const Navbar = () => {
  return (
    <header className={styles.header}>
      <div className={styles.navbar}>
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
      </div>
    </header>
  );
};

export default Navbar;
