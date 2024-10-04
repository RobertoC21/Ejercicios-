// pages/posts.js
import Link from 'next/link';

function PostsPage({ posts }) {
  return (
    <div>
      <h1>Lista de Publicaciones</h1>
      <ul>
        {posts.map(post => (
          <li key={post.id}>
            <Link href={`/posts/${post.id}`}>
              <a>{post.title}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

// `getStaticProps` para obtener las publicaciones de forma estática
export async function getStaticProps() {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await response.json();

  return {
    props: {
      posts,
    },
    revalidate: 30, // ISR: la página se regenerará cada 30 segundos
  };
}

export default PostsPage;
