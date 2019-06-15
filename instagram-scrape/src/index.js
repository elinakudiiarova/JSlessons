const getFollowers = require("./get-followers");
const currentUser = require("./current-user");

getFollowers(currentUser).then(r => console.log(r));
