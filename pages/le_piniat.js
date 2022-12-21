import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
import Script from 'next/script';

function lepiniat(alt) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juanchi - Le Piñat</title>
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
        <h2 className={styles.description}>@juanchi1020</h2>
        <h1 className={styles.description}>Copia de Le Piñat en Google Drive</h1>
        <a href="https://mega.nz/folder/cPg1SIhY#mp24oUVNmljh8heVTc37mA" className={styles.card}>
          <h4>Ir al original en MEGA</h4>
        </a>
        <Link legacyBehavior href="/">
            <a className={styles.card}>
              <h3>Volver al inicio</h3>
            </a>
          </Link>
          <div className={styles.frame}>
        <iframe 
          src="https://drive.google.com/embeddedfolderview?id=1OELO6atTvpvTJVbfFmj97JpbRgOMvaWZ#list"
          
        ></iframe>
        </div>
        <a href="https://drive.google.com/drive/folders/1OELO6atTvpvTJVbfFmj97JpbRgOMvaWZ?usp=sharing" className={styles.description}>
            <h4>Si no podes visualizar, apreta aca</h4>
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

export default lepiniat;