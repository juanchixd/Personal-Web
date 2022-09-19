import Head from "next/head";
import Link from 'next/link'

function libros() {
  return (
    <div className="container">
      <Head>
        <title>Juanchi - Libros</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div style={{borderRadius: '50%', overflow: 'hidden'}}>
        <img alt={alt} className="image" src="profile.jpg" />
        </div>
        <h2 className="description">@juanchi1020</h2>
        <h1 className="description">Libros</h1>
        <Link href="/">
            <a className="description">
              <h3>Volver al inicio</h3>
            </a>
          </Link>
          <div className="frame">
        <iframe 
          src="https://drive.google.com/embeddedfolderview?id=1IwZqxemJODWIVpUFehQsiTDElGf5wiJd#list"
          
        ></iframe>
        </div>
        <a href="https://drive.google.com/drive/folders/1IwZqxemJODWIVpUFehQsiTDElGf5wiJd?usp=sharing" className="description">
            <h4>Si no podes visualizar, apreta aca</h4>
        </a>
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
      .frame{
        background-color: #97B4BF ; /* Fallback color */
          opacity: 0.8;
          font-weight: bold;
          border: 2px solid #f1f1f1;
          position: relative;
          padding: 5px;
          z-index: 2;
      }
      @media(max-width: 768px){
        .frame iframe{
          height: 550px;
          width: 100%;
        }
      }
      @media(min-width: 768px){
        .frame iframe{
          height: 800px;
          width: 700px;
        }
      }
        .footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-text-stroke: #d7dbdd;
        }
        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-text-stroke: #d7dbdd;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align: center;
          -webkit-text-stroke: #d7dbdd;
        }
        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          alig: center;
          -webkit-text-stroke: #d7dbdd;
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
          -webkit-text-stroke: #d7dbdd;
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
          font-size: 1.25rem;
          margin: 0.5rem 1rem;
          -webkit-text-stroke: #d7dbdd;
          text-shadow: 1px  0px 0px white, 0px  1px 0px white, 1px  1px 0px white, 1px -1px 0px white, -1px  1px 0px white, -1px -1px 0px white, 1px  0px 0px white, 0px  1px 0px white;
        }
        /* Dark mode */
        @media (prefers-color-scheme: dark) {
          .container {
            background-image: url("background3.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .description {
            color: white;
            text-shadow: 1px 0px 0px black, 0px 1px 0px black,
              -1px 0px 0px black, 0px -1px 0px black;
          }
          .footer {
            color: white;
            text-shadow: 1px 0px 0px black, 0px 1px 0px black,
              -1px 0px 0px black, 0px -1px 0px black;
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
          background-image: url("background3.jpg");
          background-repeat: no-repeat;
          background-size: cover;
          background-position: center;
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

export default libros;