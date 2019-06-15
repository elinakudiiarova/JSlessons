const makeInstagramRequest = require("../make-instagram-request");
const {
  QUERY_HASH_GET_FOLLOWERS,
  QUERY_HASH_GET_FOLLOWING
} = require("./query-hashes");

module.exports = user =>
  Promise.all([
    makeInstagramRequest(QUERY_HASH_GET_FOLLOWERS, {
      id: user,
      fetch_mutual: true,
      first: 1
    }).then(result => {
      if (result.status !== "ok") {
        return Promise.reject(result);
      }

      return {
        followed_by_count: result.data.user.edge_followed_by.count,
        mutual_followed_by_count: result.data.user.edge_mutual_followed_by.count
      };
    }),
    makeInstagramRequest(QUERY_HASH_GET_FOLLOWING, {
      id: user,
      fetch_mutual: false,
      first: 1
    }).then(result => {
      if (result.status !== "ok") {
        return Promise.reject(result);
      }

      return {
        follow_count: result.data.user.edge_follow.count
      };
    })
  ]).then(([a, b]) => ({ ...a, ...b }));
