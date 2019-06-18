const getFollowers = require("./queries/get-followers");
const getFollowersCountByUser = require("./queries/get-following-info-by-user");
// const getFollowingInfoForUsers = require("./queries/get-following-info-for-users");

const currentUser = require("./current-user");

getFollowers(currentUser).then(r => {
  console.log(r);

  // getFollowingInfoForUsers(r.map(i => i.id)).then(f => console.log(f));
});

getFollowersCountByUser("2580437878").then(r => console.log(r));
