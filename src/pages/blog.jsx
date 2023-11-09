import { useQuery } from "graphql-hooks";
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import { Error } from "../components/Error";
import { BLOG_QUERY } from "../utils/BlogQuery";
import React from "react";

export function Blog() {
  const { loading, error, data } = useQuery(BLOG_QUERY);
  const [visiblePosts, setVisiblePosts] = React.useState(2);

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { allPosts } = data;

  return (
    <div className="posts-and-btn-container">
      <div className="posts container">
        {allPosts.slice(0, visiblePosts).map((post) => (
          <Link to={`/blog/${post.slug}`} key={post.id}>
            <div className="post-snippet">
              <img
                src={post.imagem.url}
                alt={post.titulo}
                className="thumbnail"
              />
              <h1>{post.titulo}</h1>
              <p className="post-date">{post.data}</p>
              <div className="avatar-name-container">
                <img
                  src={post.autor.avatar.url}
                  width={90}
                  alt="avatar"
                  className="avatar"
                />
                {/* <p className="author-name fw-700">{post.autor.nome}</p> */}
                <p className="author-name">{post.autor.nome}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
      {visiblePosts < allPosts.length && (
        <button
          onClick={() => setVisiblePosts(visiblePosts + 2)}
          className="load-more-btn"
        >
          Carregar mais posts
        </button>
      )}
    </div>
  );
}
