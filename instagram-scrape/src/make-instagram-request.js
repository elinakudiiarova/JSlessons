module.exports = function(queryHash, variables) {
  return fetch(
    `https://www.instagram.com/graphql/query/?query_hash=${queryHash}&variables=${encodeURIComponent(
      JSON.stringify(variables)
    )}`,
    {
      credentials: "include",
      headers: {
        accept: "*/*",
        "accept-language": "en,ru;q=0.9",
        "cache-control": "no-cache",
        pragma: "no-cache",
        "x-compress": "null",
        "x-ig-app-id": "936619743392459",
        "x-requested-with": "XMLHttpRequest"
      },
      method: "GET",
      mode: "cors"
    }
  )
    .then(r => r.json())
    .catch(err => {
      console.error(err, err.toString());
      return Promise.reject(err);
    });
};
