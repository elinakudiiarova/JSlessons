function newFollowers(oldFollowers, newFollowers) {
    return newFollowers.filter(
        follower => !oldFollowers.some(
            oldfollower => oldfollower.account === follower.account
        )
    )
};

module.exports = newFollowers;

