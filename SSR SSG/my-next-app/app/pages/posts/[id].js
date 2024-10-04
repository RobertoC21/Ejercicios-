// pages/posts/[id].js
import React from 'react';

// Componente para mostrar la publicación específica
function PostDetailPage({ post }) {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

// `getServerSideProps` para obtener datos de la publicación en cada solicitud
export async function getServerSideProps(context) {
  const { id } = context.params;
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await response.json();

  return {
    props: {
      post,
    },
  };
}

export default PostDetailPage;
