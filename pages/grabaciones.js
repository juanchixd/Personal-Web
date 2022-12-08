import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link';
function grabaciones(alt) {
    return (
    <div className={styles.container}>
      <Head>
        <title>Juanchi - Grabaciones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <div className={styles.image}>
        <img alt={alt} style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: "50%",}} src="profile.jpg" />
        </div>
        <h3 className={styles.description}>@juanchi1020</h3>
        <h3 className={styles.description}>Grabaciones</h3>
        <Link legacyBehavior href="/">
            <a className={styles.card}>
              <h3>Volver al inicio</h3>
            </a>
          </Link>
        <div className={styles.grid}>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPtgUX1awj90MxOgBjzn2N1q" className={styles.card}>
                <span><h3>Algebra lineal</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuyuIoZuEHtavMY6Yxh-vlP" className={styles.card}>
                <span><h3>Fisica I</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuwxxQ835w7h8-DlSdQ3ZRo" className={styles.card}>
                <span><h3>Fisica II</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuubowDTFcbDircn99CFqQi" className={styles.card}>
                <span><h3>Informatica Aplicada ECA</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuIndCYD2gjYmy3TKylN3lf" className={styles.card}>
                <span><h3>Matematica Aplicada</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPsPmcvj4OdzI9s5xpLB0gJi" className={styles.card}>
                <span><h3>Probabilidad y estadistica</h3></span>
            </a>
        </div>
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
export default grabaciones;