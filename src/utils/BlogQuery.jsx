export const BLOG_QUERY = `query HomePage {
  allPosts(orderBy: data_DESC) {
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
    }
    _status
    _firstPublishedAt
  }

  _allPostsMeta {
    count
  }
}`;

// export const BLOG_QUERY = `query HomePage($limit: IntType) {
//   allPosts(first: $limit) {
//     id
//     titulo
//     imagem {
//       url
//     }
//     data
//     slug
//     autor {
//       nome
//     	avatar {
//         url
//       }
//     }
//     texto {
//       value
//     }
//     _status
//     _firstPublishedAt
//   }

//   _allPostsMeta {
//     count
//   }
// }`;