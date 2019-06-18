const getFollowingInfoByUser = require("./get-following-info-by-user");

const CONCURRENT_REQUESTS = 4;

module.exports = function(userIds) {
  const userCopy = [...userIds];
  return getFollowingInfoForUsersCore(userCopy, []);
};

function getFollowingInfoForUsersCore(userIds, results) {
  const req = userIds.splice(0, CONCURRENT_REQUESTS);

  return Promise.all(req.map(userId => getFollowingInfoByUser(userId))).then(
    nextResult => {
      if (userIds.length) {
        return timeout(1000).then(() =>
          getFollowingInfoForUsersCore(userIds, [...results, ...nextResult])
        );
      } else {
        return results;
      }
    }
  );
}

function timeout(delay) {
  return new Promise(resolve => {
    setTimeout(resolve, delay);
  });
}
