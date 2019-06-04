const followers = require("../Followers/followers-2019-06-04.json");

console.log(followers.filter(follower => follower.following === true));
