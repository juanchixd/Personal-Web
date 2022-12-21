import Head from "next/head";
import styles from "../styles/Home.module.css"; 
import Link from 'next/link';
import Script from 'next/script';

function Software(alt) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juanchi - Drive de Software</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <>
        <Script src="https://app.embed.im/snow.js" defer />
      </>
      <main className={styles.main}>
      <div className={styles.image}>
        <img alt={alt} style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: "50%",}} src="profile.jpg" />
        </div>
        <h3 className={styles.description}>@juanchi1020</h3>
        <h3 className={styles.description}>Drive de Software</h3>
        <Link legacyBehavior href="/">
          <a className={styles.description}>
            <h3>Volver al inicio</h3>
          </a>
        </Link>
        <div className={styles.frame}>
          <iframe 
            src="https://drive.google.com/embeddedfolderview?id=1yir7H1bUo-Q0ytkZVp640DR8BVC90jm7#list"
          ></iframe>
        </div>
        <a href="https://drive.google.com/drive/folders/1yir7H1bUo-Q0ytkZVp640DR8BVC90jm7?usp=share_link" className={styles.description}>
            <h3>Si no podes visualizar, apreta aca</h3>
        </a>
      </main>
      <footer className={styles.footer}>
        <a
          href="https://github.com/juanchixd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Juan Gonzalez{" "}
        </a>
      </footer>
    </div>
  );
}

export default Software;