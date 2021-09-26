const buddyList = require('./')

const fs = require('fs');
const myConsole = new console.Console(fs.createWriteStream('./tracks1.txt', {
  flags: 'a'
}))

async function main() {
  const spDcCookie = 'REDACTED_va3LTFdCSxTPk'
  const {
    accessToken
  } = await buddyList.getWebAccessToken(spDcCookie)
  const friendActivity = await buddyList.getFriendActivity(accessToken)
  for (let i = 0; i < 30; i++) {
    console.log(friendActivity.friends[i].track.uri)
    myConsole.log(friendActivity.friends[i].track.uri);
  }
}

main()
// Run every minute
setInterval(() => main(), 1000 * 60)