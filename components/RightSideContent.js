import { AiOutlinePlus } from 'react-icons/ai';
import { IoIosArrowForward } from 'react-icons/io';
import { BsCameraVideoFill, BsSearch, BsThreeDots } from 'react-icons/bs';
import styles from 'styles/rightsidecontent.module.scss';

const RightSideContent = () => {
  return (
    <section className={styles.rightSideContent}>
      <div className={styles.followRequests}>
        <header>
          <h1>Follow Request</h1>
          <a>See All</a>
        </header>
        <hr />
        <div className={styles.userAccount}>
          <div className={styles.left}>
            <img src='/images/profile-photo-2.jpg' alt='Profile Photo' />
          </div>
          <div className={styles.right}>
            <h2>Rufus Bee</h2>
            <h3>Works at Hybrid</h3>
          </div>
        </div>
        <div className={styles.accountButtons}>
          <button>Cancel</button>
          <button>Follow</button>
        </div>
      </div>
      <div className={styles.people}>
        <div className={styles.suggestedPeople}>
          <h1>People you might like to follow</h1>
          <div className={styles.list}>
            <ul>
              <li>
                <div className={styles.personImage}>
                  <img src='/images/profile-photo-3.jpg' alt='Profile Photo' />
                  <span>
                    <AiOutlinePlus />
                  </span>
                </div>
                <div className={styles.personName}>Abigail Diana</div>
              </li>
              <li>
                <div className={styles.personImage}>
                  <img src='/images/profile-photo-3.jpg' alt='Profile Photo' />
                  <span>
                    <AiOutlinePlus />
                  </span>
                </div>
                <div className={styles.personName}>Abigail Diana</div>
              </li>
              <li>
                <div className={styles.personImage}>
                  <img src='/images/profile-photo-3.jpg' alt='Profile Photo' />
                  <span>
                    <AiOutlinePlus />
                  </span>
                </div>
                <div className={styles.personName}>Abigail Diana</div>
              </li>
              <li>
                <div className={styles.personImage}>
                  <img src='/images/profile-photo-3.jpg' alt='Profile Photo' />
                  <span>
                    <AiOutlinePlus />
                  </span>
                </div>
                <div className={styles.personName}>Abigail Diana</div>
              </li>
            </ul>
            <div className={styles.seeMorePeople}>
              <IoIosArrowForward />
            </div>
          </div>
        </div>
        <div className={styles.friends}>
          <header>
            <h1>My Friends</h1>
            <div className={styles.icons}>
              <span>
                <BsCameraVideoFill />
              </span>
              <span className={styles.search}>
                <BsSearch />
              </span>
              <span>
                <BsThreeDots />
              </span>
            </div>
          </header>
          <ul>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-4.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span>2 min</span>
              </div>
            </li>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-6.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span>2 min</span>
              </div>
            </li>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-1.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span className={styles.activeNow}></span>
              </div>
            </li>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-2.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span className={styles.activeNow}></span>
              </div>
            </li>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-1.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span className={styles.activeNow}></span>
              </div>
            </li>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-5.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span className={styles.activeNow}></span>
              </div>
            </li>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-4.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span>2 min</span>
              </div>
            </li>
            <li>
              <div className={styles.userDetails}>
                <img src='/images/profile-photo-7.jpg' alt='Profile Photo' />
                <p>Andrew Musk</p>
              </div>
              <div className={styles.lastActive}>
                <span className={styles.activeNow}></span>
              </div>
            </li>
          </ul>
        </div>
        <hr />
      </div>
    </section>
  );
};

export default RightSideContent;
