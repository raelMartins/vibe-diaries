import ReactModal from 'react-modal';
import { BsPlayBtnFill, BsImageFill } from 'react-icons/bs';
import { IoMdCloseCircle } from 'react-icons/io';
import styles from 'styles/allposts.module.scss';
import { useState } from 'react';
import Post from './Post';

const AllPosts = () => {
  const [postModal, setPostModal] = useState(false);
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
      <div className={styles.postList}>
        <Post
          content={`The demand for remote designers, developers, project managers, and finance experts 
          is rampng up, and will continue to grow moving forward! It's an exciting time to 
          transition to remote work. Working remotely has given me the freedom to plan my own
          schedule and expand my knowledge base and skills.`}
          images={[]}
          video={false}
          postBy={{
            image: '/images/profile-photo-15.jpg',
            name: 'Victoria Odunayo'
          }}
          time='Just Now'
          commentCount={50}
          shareCount={10}
          header='What are the most in-demand freelance jobs for 2022?'
        />
        <Post
          content='A bit late to the party, and I might be biased because I am the author, but I would love 
          to mention The Road to React. The book takes you on the journey learning React with 
          Hooks the pragmatic way. You will build a real world application, consume a real API, 
          write tests for your application, implement responsive design, etc'
          images={[]}
          video={false}
          postBy={{
            image: '/images/profile-photo-16.jpg',
            name: 'Ade Adams'
          }}
          time='10 mins ago'
          commentCount={900}
          shareCount={20}
          header='What is the best book to learn React?'
        />
        <Post
          content='Hi. In 2016, Selena Gomez was banned from performing in China and this ban still 
          stands to this day. In 2014, Selena posted a pictureof herself 
          alongside the Dalai Lama when they met in Vancouver, Canada.'
          images={[
            '/images/post-photo-4.jpg',
            '/images/post-photo-1.jpg',
            '/images/post-photo-2.jpg'
            // '/images/post-photo-3.jpg'
          ]}
          video={false}
          postBy={{ image: '/images/profile-photo-17.jpg', name: 'John Smith' }}
          time='10 hrs ago'
          commentCount={50}
          shareCount={10}
          header='Are any celebrities banned in different countries? If yes, why?'
        />
        <Post
          content='Hi. In 2016, Selena Gomez was banned from performing in China and this ban still 
          stands to this day. In 2014, Selena posted a pictureof herself 
          alongside the Dalai Lama when they met in Vancouver, Canada.'
          images={['/images/video-image.jpg']}
          video={true}
          postBy={{
            image: '/images/profile-photo-18.jpg',
            name: 'Mark Spector'
          }}
          time='10 hrs ago'
          commentCount={50}
          shareCount={10}
          header='Are any celebrities banned in different countries? If yes, why?'
        />
      </div>
      <footer>
        <h4>You have reached the end of your feed</h4>
        <button onClick={() => location.reload()}>Refresh Page</button>
      </footer>
    </section>
  );
};

export default AllPosts;
