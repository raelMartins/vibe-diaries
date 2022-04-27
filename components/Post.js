import {
  BsThreeDots,
  BsHeartFill,
  BsFillChatTextFill,
  BsPlayCircleFill
} from 'react-icons/bs';
import { FaShare } from 'react-icons/fa';
import styles from 'styles/post.module.scss';

const Post = (props) => {
  const imagesClassName =
    props.images.length <= 0
      ? styles.noImage
      : props.images.length === 1
      ? styles.oneImage
      : props.images.length === 2
      ? styles.twoImages
      : props.images.length === 3
      ? styles.threeImages
      : props.images.length >= 4
      ? styles.fourImages
      : null;
  return (
    <div className={styles.post}>
      <header>
        <div className={styles.postBy}>
          <div className={styles.userImage}>
            <img src={props.postBy.image} alt='profile Photo' />
          </div>
          <div className={styles.userDetails}>
            <span className={styles.userName}>
              {props.postBy.name} | <b>Follow</b>
            </span>
            <span className={styles.time}>{props.time} . Public</span>
          </div>
        </div>
        <span>
          <BsThreeDots />
        </span>
      </header>
      <div className={styles.postContent}>
        <h4>{props.header}</h4>
        <p>{props.content}</p>
        <div className={imagesClassName}>
          <div className={styles.left}>
            <span>
              <img src={props.images[0]} alt='First Image' />
            </span>
            <span>
              {props.images.length >= 4 ? (
                <img src={props.images[2]} alt='Third Image' />
              ) : null}
            </span>
          </div>
          <div className={styles.right}>
            <span>
              <img src={props.images[1]} alt='Second Image' />
            </span>
            <span>
              {props.images.length === 3 ? (
                <img src={props.images[2]} alt='Third Image' />
              ) : props.images.length >= 4 ? (
                <img src={props.images[3]} alt='Fourth Image' />
              ) : null}
            </span>
          </div>
          {props.video && (
            <div className={styles.playButton}>
              <BsPlayCircleFill />
            </div>
          )}
        </div>
      </div>
      <div className={styles.postStatistics}>
        <div className={styles.left}>
          <span>
            <img src='/images/profile-photo-10.jpg' alt='viewed by' />
          </span>
          <span>
            <img src='/images/profile-photo-12.jpg' alt='viewed by' />
          </span>
          <span>
            <img src='/images/profile-photo-14.jpg' alt='viewed by' />
          </span>
          <span>+ 1k</span>
        </div>
        <div className={styles.right}>
          <span>{props.commentCount}</span> <span>comments</span>
          <span>{props.shareCount}</span> <span>shares</span>
        </div>
      </div>
      <hr />
      <div className={styles.postActions}>
        <span style={{ color: '#ff4500' }}>
          <BsHeartFill />
          Like
        </span>
        <span>
          <BsFillChatTextFill />
          Comment
        </span>
        <span>
          <FaShare />
          Share
        </span>
      </div>
      <hr />
      <div className={styles.addComment}>
        <img src='/images/profile-photo-1.jpg' alt='Profile Photo' />
        <input type='text' placeholder='Write a comment...' />
      </div>
    </div>
  );
};

export default Post;
