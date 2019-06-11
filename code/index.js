const oldfollowers = require("../Followers/followers-2019-06-04.json");
const newFollowers = require("./new-followers");
const followers = require("../Followers/followers-2019-06-11.json");

console.log(newFollowers(oldfollowers, followers));
