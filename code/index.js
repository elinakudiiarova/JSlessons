const newFollowers = require("./new-followers");
const offFollowers = require("./off-followers");
const followersByDate = require("./followers-by-date");

followersByDate.forEach((m, i, a) => {
    if (i === 0) {
        console.log(`${m.date} : ${m.followers.length}`);
    } else {
        console.log(`${m.date} : ${newFollowers(a[i - 1].followers, m.followers).length}, 
    ${offFollowers(a[i - 1].followers, m.followers).length} `);
    }
});
//console.log(newFollowers(oldfollowers, followers));
//console.log(newFollowers(followers, followers2));

