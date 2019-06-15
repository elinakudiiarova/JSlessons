const { QUERY_HASH_GET_FOLLOWERS } = require("./query-hashes");

const makeInstagramRequest = require("./make-instagram-request");

module.exports = currentUser =>
  getFollowersCore(currentUser).then(r => r.map(i => i.node));

function getFollowersCore(user, after) {
  const variables = {
    id: user,
    include_reel: true,
    first: 100
  };

  if (after) {
    variables.after = after;
  }

  return makeInstagramRequest(QUERY_HASH_GET_FOLLOWERS, variables).then(
    result => {
      if (result.status !== "ok") {
        return Promise.reject(result);
      }

      const followers = result.data.user.edge_followed_by;

      if (followers.page_info && followers.page_info.has_next_page) {
        return getFollowersCore(user, followers.page_info.end_cursor).then(
          nextPage => [...followers.edges, ...nextPage]
        );
      } else {
        return followers.edges;
      }
    }
  );
}
