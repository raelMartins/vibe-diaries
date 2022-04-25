import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/home.module.scss';

export default function Home() {
  return (
    <div className={styles.landingPage}>
      <Head>
        <title>Vibe Diaries</title>
        <meta name='description' content='A social etworking application' />
        <link rel='icon' href='/logo/vd-test-logo.png' />
      </Head>

      <main className={styles.main}>
        <header>Navigation</header>
        <div className={styles.container}>
          <section></section>
          <section></section>
          <section></section>
        </div>
      </main>

      <footer></footer>
    </div>
  );
}
