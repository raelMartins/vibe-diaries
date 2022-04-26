import ReactModal from 'react-modal';
import { BsPlayBtnFill, BsImageFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
import styles from 'styles/allposts.module.scss';
import { useState } from 'react';

const AllPosts = () => {
  const [postModal, setPostModal] = useState(true);
  return (
    <section className={styles.allPostsSection}>
      <ReactModal
        isOpen={postModal}
        onRequestClose={() => setPostModal(false)}
        ariaHideApp={false}
      >
        <div className={styles.addNewPostModal}>
          <header>
            <h1>Post your vibes</h1>
            <span onClick={() => setPostModal(false)}>
              <IoMdCloseCircle />
            </span>
          </header>
          <hr />
          <div className={styles.addNewPost}>
            <div className={styles.left}>
              <img src='/images/profile-photo-1.jpg' alt='profile photo' />
            </div>
            <div className={styles.right}>
              <textarea placeholder='Share your vibes, Folashade...' />
              <div className={styles.addPostButtons}>
                <div className={styles.addContent}>
                  <span className={styles.addContentButton}>
                    <BsPlayBtnFill />
                    <b>Live Video</b>
                  </span>
                  <span className={styles.addContentButton}>
                    <BsImageFill />
                    <b>Attach Image</b>
                  </span>
                  <span className={styles.addContentButton}>
                    <BsPlayBtnFill />
                    <b>Attach Video</b>
                  </span>
                </div>
                <div className={styles.submit}>
                  <button>Post</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </ReactModal>
      <div className={styles.addNewPost}>
        <div className={styles.left}>
          <img src='/images/profile-photo-1.jpg' alt='profile photo' />
        </div>
        <div className={styles.right}>
          <input
            onClick={() => setPostModal(true)}
            type='text'
            placeholder='Share your vibes, Folashade...'
          />
          <div className={styles.addPostButtons}>
            <div className={styles.addContent}>
              <span className={styles.addContentButton}>
                <BsPlayBtnFill />
                <b>Live Video</b>
              </span>
              <span className={styles.addContentButton}>
                <BsImageFill />
                <b>Attach Image</b>
              </span>
              <span className={styles.addContentButton}>
                <BsPlayBtnFill />
                <b>Attach Video</b>
              </span>
            </div>
            <div className={styles.submit}>
              <button>Post</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllPosts;
