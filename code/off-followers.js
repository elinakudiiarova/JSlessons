function offFollowers(oldFollowers, newFollowers) {
    return oldFollowers.filter(
        follower => !newFollowers.some(
            newFollower => newFollower.account === follower.account
        )
    )
};

module.exports = offFollowers;