import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'
function clec(alt) {
    return (
    <div className={styles.container}>
      <Head>
        <title>Juanchi - CLEC</title>
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
        <h3 className={styles.description}>CLEC</h3>
        <Link legacyBehavior href="/">
            <a className={styles.card}>
              <h3>Volver al inicio</h3>
            </a>
          </Link>
        <div className={styles.grid}>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPtXXVBlxEj-QE7rClb-gYgd" className={styles.card}>
                <span><h3>Grabación 1er año 1er cuatri</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuHFV93h2OINwKTzVlm92bc" className={styles.card}>
                <span><h3>Grabación 1er año 2do cuatri</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPtcBVeHkNgf8-fZV15XtPs5" className={styles.card}>
                <span><h3>Grabación 2do año 1er cuatri</h3></span>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuNU8KG8M83baPAyOKANAbC" className={styles.card}>
                <span><h3>Grabación 2do año 2do cuatri</h3></span>
            </a>
            <a href="https://drive.google.com/drive/folders/1X-XPUJMqKL2g-_eSwOXcX-5C_uZTIoNA?usp=sharing" className={styles.card}>
                <span><h3>Libros</h3></span>
            </a>
            <a href="https://clec-unr.com/moodle30/my/" className={styles.card}>
                <span><h3>Campus</h3></span>
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
export default clec;