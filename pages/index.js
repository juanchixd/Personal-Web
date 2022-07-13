import Head from "next/head";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Juanchi</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <img className="image" src="profile.jpg" />
        <h3 className="description">@juanchi1020</h3>
        <h3 className="description">Federación - Concordia - Rosario</h3>
        <h3 className="description">Técnico mecánico electricista</h3>
        <h3 className="description">Estudiante de ing. electrónica</h3>
        <h3 className="description">Mis redes y links de interés:</h3>
        <div className="grid">
          <a href="https://github.com/juanchixd" className="card">
            <h3>Github</h3>
          </a>
          <a href="https://t.me/juanbgon" className="card">
            <h3>Telegram</h3>
          </a>
          <a href="https://www.instagram.com/juanchi1020/" className="card">
            <h3>Instagram</h3>
          </a>
          <a href="https://drive.google.com/drive/folders/1FYUe2-QsNmf1yBmEc3aUTy_iAMUdkx5W?usp=sharing" className="card">
            <h3>Drive carpeta facultad interna</h3>
          </a>

          <a href="https://drive.google.com/drive/folders/1Iyuq-KlP0f0Mo7oHSnS3thSBglmdf60J?usp=sharing" className="card">
            <h3>Drive biblioteca digital</h3>
          </a>

          <a
            href="mailto:contacto@juangonzalez.com.ar"
            className="card"
          >
            <h4>contacto@juangonzalez.com.ar</h4>
    
          </a>
        </div>
      </main>
      <footer className="footer">
        <a
          href="https://github.com/juanchixd"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by Juan Gonzalez{" "}
        </a>
      </footer>
      <style jsx>{`
        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .footer img {
          margin-left: 0.5rem;
        }
        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align: center;
        }
        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          alig: center;
        }
        .image {
          border-radius: 50%;
          height: 200px;
          width: 200px;
        }
        a {
          color: inherit;
          text-decoration: none;
        }
        .title a {
          color: #0070f3;
          text-decoration: none;
        }
        .title a:hover,
        .title a:focus,
        .title a:active {
          text-decoration: underline;
        }
        .title {
          margin: 0;
          line-height: 1.15;
          font-size: 4rem;
        }
        .description {
          color: black;
          text-align: center;
          line-height: 1.5;
          font-size: 1.5rem;
          margin: 0.5rem 1rem;
        }
        .grid {
          display: flex;
          align-items: center;
          justify-content: center;
          flex-wrap: wrap;
          max-width: 800px;
          margin-top: 1rem;
          align: center;
        }
        .card {
          align: center;
          margin: 0.5rem;
          flex-basis: 45%;
          padding: 1.5rem;
          text-align: center;
          background: #fafafa;
          color: inherit;
          text-decoration: none;
          border: 1px solid #eaeaea;
          border-radius: 10px;
          transition: color 0.15s ease, border-color 0.15s ease;
          min-width: 350px;
        }
        .card:hover,
        .card:focus,
        .card:active {
          color: #0070f3;
          border-color: #0070f3;
        }
        .card h3 {
          align: center;
          margin: 0 3rem 0 3rem;
          font-size: 1.5rem;
        }
        /* Dark mode */
        @media (prefers-color-scheme: dark) {
          .container {
            background-image: url("background.jpg");
            // background-image: url("wallpaper.gif");
            background-repeat: no-repeat;
            // background-size: cover;
            background-size: 100% 100%;
            // height: 100%;
            // background: rgb(53, 53, 53);
          }
          .description {
            color: white;
          }
          .footer {
            color: white;
          }
        }
        @media (max-width: 600px) {
          .grid {
            width: 100%;
            flex-direction: column;
          }
        }
        @media (max-width: 350px) {
          .card h3 {
            margin: 0 3rem 0 3rem;
            font-size: 1.25rem;
          }
          .card {
            min-width: 275px;
          }
        }
      `}</style>
      <style jsx global>{`
        html,
        body {
          background-image: url("background.jpg");
          // background-image: url("wallpaper.gif");
          background-repeat: no-repeat;
          // background-size: cover;
          background-size: 100% 100%;
          // height: 100%;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
         body {

            font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
             Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
             sans-serif;
         }

        a {
          color: inherit;
          text-decoration: none;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
