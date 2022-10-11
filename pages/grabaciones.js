import Head from "next/head";
import Link from 'next/link'
function grabaciones(alt) {
    return (
    <div className="container">
      <Head>
        <title>Juanchi - Grabaciones</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
      <div style={{borderRadius: '50%', overflow: 'hidden'}}>
        <img alt={alt} className="image" src="profile.jpg" />
        </div>
        <h3 className="description">@juanchi1020</h3>
        <h3 className="description">Grabaciones</h3>
        <Link href="/">
            <a className="description">
              <h3>Volver al inicio</h3>
            </a>
          </Link>
        <div className="grid">
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPtgUX1awj90MxOgBjzn2N1q" className="card">
                <h3>Algebra lineal</h3>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuyuIoZuEHtavMY6Yxh-vlP" className="card">
                <h3>Fisica I</h3>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuwxxQ835w7h8-DlSdQ3ZRo" className="card">
                <h3>Fisica II</h3>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuubowDTFcbDircn99CFqQi" className="card">
                <h3>Informatica Aplicada ECA</h3>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPuIndCYD2gjYmy3TKylN3lf" className="card">
                <h3>Matematica Aplicada</h3>
            </a>
            <a href="https://www.youtube.com/playlist?list=PLvZC6KXjYqPsPmcvj4OdzI9s5xpLB0gJi" className="card">
                <h3>Probabilidad y estadistica</h3>
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
          -webkit-text-stroke: #D7DBDD;
        }
        .footer a {
          display: flex;
          justify-content: center;
          align-items: center;
          -webkit-text-stroke: #D7DBDD;
          text-shadow: 1px  0px 0px white, 0px  1px 0px white, 0px -1px 0px white, -1px  0px 0px white;
        }
        .container {
          min-height: 100vh;
          padding: 0 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          align: center;
          -webkit-text-stroke: #D7DBDD;
        }
        main {
          padding: 4rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          alig: center;
          -webkit-text-stroke: #D7DBDD;
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
          -webkit-text-stroke: #D7DBDD;
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
          -webkit-text-stroke: #D7DBDD;
          text-shadow: 1px  0px 0px white, 0px  1px 0px white, 1px  1px 0px white, 1px -1px 0px white, -1px  1px 0px white, -1px -1px 0px white, 1px  0px 0px white, 0px  1px 0px white;
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
            background-image: url("background3.jpg");
            background-repeat: no-repeat;
            background-size: cover;
            background-position: center;
          }
          .description {
            color: white;
            text-shadow: 1px  0px 0px black,
              0px  1px 0px black,
              -1px  0px 0px black,
              0px -1px 0px black;
          }
          .footer {
            color: white;
            text-shadow: 1px  0px 0px black,
              0px  1px 0px black,
              -1px  0px 0px black,
              0px -1px 0px black;
          }
          .footer a{
            color: white;
            text-shadow: 1px  0px 0px black,
              0px  1px 0px black,
              -1px  0px 0px black,
              0px -1px 0px black;
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
export default grabaciones;