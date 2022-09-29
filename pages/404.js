import Link from 'next/link';

const MyCustom404Page = (props) => {
  return (
    <div
      style={{
        marginTop: 100,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <h1>404</h1>
      <h2>
        <Link href="/">
          <a style={{ color: 'blue', textDecoration: 'underline' }}>
            Volver al inicio
          </a>
        </Link>
      </h2>
      <p>Lo siento, no se pudo encontrar el contenido que estas buscando</p>
    </div>
  );
};

export default MyCustom404Page;