const getFollowers = require("./queries/get-followers");
const getFollowersCount = require("./queries/get-following-info");
const currentUser = require("./current-user");

// getFollowers(currentUser).then(r => console.log(r));

getFollowersCount("2580437878").then(r => console.log(r));
