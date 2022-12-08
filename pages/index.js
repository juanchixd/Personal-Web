import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export default function Home(alt) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juanchi</title>
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
        <h3 className={styles.description}>Federación - Concordia - Rosario</h3>
        <h3 className={styles.description}>Técnico mecánico electricista</h3>
        <h3 className={styles.description}>Estudiante de ing. electrónica</h3>
        <h3 className={styles.description}>Programador part-time</h3>
        <h3 className={styles.description}>Mis redes y links de interés:</h3>
        <div className={styles.grid}>
          <a href="https://github.com/juanchixd" className={styles.card}>
            <span><h3>Github</h3></span>
          </a>
          <a href="https://t.me/juanbgon" className={styles.card}>
            <span><h3>Telegram</h3></span>
          </a>
          <a
            href="https://www.instagram.com/juanchi1020/"
            className={styles.card}
          >
            <span><h3>Instagram</h3></span>
          </a>
          <Link href="/libros">
            <a className={styles.card}>
              <span><h3>Libros</h3></span>
            </a>
          </Link>
          <Link href="/drive">
            <a className={styles.card}>
              <span><h3>Drive carpeta facultad interna</h3></span>
            </a>
          </Link>
          <Link href="/facultad">
            <a className={styles.card}>
              <span><h3>Drive biblioteca digital</h3></span>
            </a>
          </Link>
          <Link href="/grabaciones">
            <a className={styles.card}>
              <span><h3>Grabaciones</h3></span>
            </a>
          </Link>
          <Link href="/le_piniat">
            <a className={styles.card}>
              <span><h3>Le Piñat (ECA)</h3></span>
            </a>
          </Link>
          <a href="mailto:contacto@juangonzalez.com.ar" className={styles.card}>
            <span><h4>contacto@juangonzalez.com.ar</h4></span>
          </a>
          <a
            href="https://music.youtube.com/browse/UC1Qwaf0hYL4Im88HIfSJ35w"
            className={styles.card}
          >
            <span><h3>Listas de reproducción</h3></span>
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
