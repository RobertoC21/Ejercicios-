// pages/index.js
import Link from 'next/link';

export default function HomePage() {
  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h1>Bienvenido a la App de Next.js</h1>
      <ul>
        {/* Enlace a la página SSR */}
        <li>
          <Link href="/ssr">
            <a>Ver página SSR (Server Side Rendering)</a>
          </Link>
        </li>

        {/* Enlace a la página SSG */}
        <li>
          <Link href="/ssg">
            <a>Ver página SSG (Static Site Generation)</a>
          </Link>
        </li>

        {/* Enlace a la lista de publicaciones */}
        <li>
          <Link href="/posts">
            <a>Ver lista de publicaciones</a>
          </Link>
        </li>
      </ul>
    </div>
  );
}
