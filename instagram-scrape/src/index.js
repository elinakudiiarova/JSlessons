const getFollowers = require("./queries/get-followers");
const getFollowersCountByUser = require("./queries/get-following-info-by-user");
// const getFollowingInfoForUsers = require("./queries/get-following-info-for-users");

const currentUser = require("./current-user");

getFollowers(currentUser).then(r => {
  console.log(JSON.stringify(r));
});
