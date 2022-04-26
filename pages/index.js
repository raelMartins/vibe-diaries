import Head from 'next/head';
import styles from '../styles/home.module.scss';
import Navbar from 'components/Navbar';
import LeftSideFilter from 'components/LeftSideFilter';
import AllPosts from 'components/AllPosts';

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <Head>
        <title>Vibe Diaries</title>
        <meta name='description' content='A social etworking application' />
        <link rel='icon' href='/logo/vd-test-logo.png' />
      </Head>
      <main className={styles.main}>
        <Navbar />
        <div className={styles.container}>
          <LeftSideFilter />
          <div className={styles.mainContent}>
            <AllPosts />
            <section>more</section>
          </div>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
