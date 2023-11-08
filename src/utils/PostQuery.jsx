export const POST_QUERY = `query HomePage($slug: String!) {
  post(filter: {slug: {eq: $slug}}) {
    id
    titulo
    imagem {
      url
    }
    data
    slug
    autor {
      nome
      avatar {
        url
      }
    }
    texto {
      value
      blocks {
        __typename
        ... on ImageBlockRecord {
          id
          singleAsset {
            alt
            url
          }
        }
        ... on VideoBlockRecord {
          id
          externalVideo {
            url
          }
        }
      }
    }
    _status
    _firstPublishedAt
  }
}`;

// export const POST_QUERY = `query HomePage($slug: String!) {
//   post(filter: {slug: {eq: $slug}}) {
//     id
//     titulo
//     imagem {
//       url
//     }
//     data
//     slug
//     autor {
//       nome
//       avatar {
//         url
//       }
//     }
//     texto {
//       value
//       blocks {
//         __typename
//         id
//         ... on ImageBlockRecord {
//           singleAsset {
//             alt,
//             url
//           }
//         }
//       }
//     }
//     _status
//     _firstPublishedAt
//   }
// }`;