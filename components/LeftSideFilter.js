import { IoAdd } from 'react-icons/io5';
import styles from 'styles/leftsidefilter.module.scss';

const LeftSideFilter = () => {
  return (
    <section className={styles.leftSideFilter}>
      <div className={styles.addGroupButton}>
        <button>
          <IoAdd />
          Add Group
        </button>
      </div>
      <ul className={styles.filters}>
        <li>Health</li>
        <li>Politics</li>
        <li>Sports</li>
        <li>Education</li>
        <li>Economy</li>
        <li>Jobs</li>
        <li>Safety</li>
        <li>Business</li>
        <li>Entertainment</li>
        <li>Science & Technology</li>
        <li>History & Ancestry</li>
        <li>
          <a>Discover More</a>
        </li>
      </ul>
    </section>
  );
};

export default LeftSideFilter;
