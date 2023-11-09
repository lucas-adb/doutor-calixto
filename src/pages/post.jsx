import { StructuredText } from "react-datocms";
import { useQuery } from "graphql-hooks";
import { useParams } from "react-router-dom";
import { Error } from "../components/Error";
import Loading from "../components/Loading";
import { POST_QUERY } from "../utils/PostQuery";
import ReactPlayer from "react-player";

export function Post() {
  const { slug } = useParams();

  const { loading, error, data } = useQuery(POST_QUERY, {
    variables: {
      slug: slug,
    },
  });

  if (loading) return <Loading />;
  if (error) return <Error />;

  const { post } = data;

  return (
    <div className="padding-2-rem container">
      <div key={post.id} className="post">
        <h1 className="fs-700">{post.titulo}</h1>
        <div className="avatar-name-container">
          <img
            src={`${post.autor.avatar.url}`}
            alt="avatar"
            className="avatar"
          />
          <p className="author-name">{post.autor.nome}</p>
        </div>
        <img src={`${post.imagem.url}`} alt="thumbnail" className="thumbnail" />
        <div className="post-main-content">
          <p className="post-data">{post.data}</p>
          <StructuredText
            data={post.texto}
            renderInlineRecord={({ record }) => {
              switch (record.__typename) {
                case "BlogPostRecord":
                  return <a href={`/blog/${record.slug}`}>{record.title}</a>;
                default:
                  return null;
              }
            }}
            renderLinkToRecord={({ record, children }) => {
              switch (record.__typename) {
                case "BlogPostRecord":
                  return <a href={`/blog/${record.slug}`}>{children}</a>;
                default:
                  return null;
              }
            }}
            renderBlock={({ record }) => {
              switch (record.__typename) {
                case "ImageBlockRecord":
                  return (
                    <img
                      src={record.singleAsset.url}
                      alt={record.singleAsset.alt}
                    />
                  );
                case "VideoBlockRecord":
                  return (
                    <ReactPlayer
                      url={record.externalVideo.url}
                      controls
                      width="100%"
                    />
                  );
                default:
                  return null;
              }
            }}
          />
        </div>
      </div>
    </div>
  );
}
