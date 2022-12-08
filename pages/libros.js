import Head from "next/head";
import styles from "../styles/Home.module.css";
import Link from 'next/link'

function libros(alt) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Juanchi - Libros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
      <div className={styles.image}>
        <img alt={alt} style={{
          maxWidth: '100%',
          height: 'auto',
          borderRadius: "50%",}} src="profile.jpg" />
        </div>
        <h2 className={styles.description}>@juanchi1020</h2>
        <h1 className={styles.description}>Libros</h1>
        <Link legacyBehavior href="/">
            <a className={styles.card}>
              <h3>Volver al inicio</h3>
            </a>
          </Link>
        <h1 className={styles.description}>Si buscas libros para la facultad apreta
          <Link legacyBehavior href="/drive">
            <a className={styles.card}>
              <h3>aca para drive interno mio</h3>
            </a>
          </Link>
          o
          <Link legacyBehavior href="/facultad">
            <a className={styles.card}>
              <h3>aca para drive publico de la comunidad</h3>
            </a>
          </Link>
        </h1>
          
          <div className={styles.frame}>
        <iframe 
          src="https://drive.google.com/embeddedfolderview?id=1IwZqxemJODWIVpUFehQsiTDElGf5wiJd#list"
          
        ></iframe>
        </div>
        <a href="https://drive.google.com/drive/folders/1IwZqxemJODWIVpUFehQsiTDElGf5wiJd?usp=sharing" className={styles.description}>
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

export default libros;