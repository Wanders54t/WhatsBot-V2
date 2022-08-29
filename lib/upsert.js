/* ═══════════════════════════════════════════════════════ //
=> If you want to recode, reupload,
=> or copy the codes/script,
=> pls give credit,
=> no credit? i will take action immediately.
==> Copyright (C) 2022 Dark_Ezio.
==> Licensed under the  MIT License;
===> you may not use this file except in compliance with the License.
=> Thank you to Lord Buddha, Family and Myself.
=> Whats Bot - Dark_Ezio.
// ════════════════════════════ */

const chalk = require("chalk");
const config = require("./config");

module.exports = async (conn, m) => {
  try {


    // ## print Message To Console
    if (m.message) {
      console.log(
        chalk.black(chalk.bgWhite("[ MESSAGE ]")),
        chalk.black(chalk.bgGreen(new Date())),
        chalk.black(chalk.bgBlue(m.client.displayText || m.type)) +
          "\n" +
          chalk.magenta("=> From"),
        chalk.green(m.client.pushName),
        chalk.yellow(m.sender) + "\n" + chalk.blueBright("=> In"),
        chalk.green(m.isGroup ? m.client.pushName : "Private Chat", m.from)
      );
    }

    // reset limit every 12 hours

    // let cron = require("node-cron");
    // cron.schedule(
    //   "00 12 * * *",
    //   () => {
    //     let user = Object.keys(global.db.data.users);
    //     let limitUser = isPremium
    //       ? global.limitawal.premium
    //       : global.limitawal.free;
    //     for (let jid of user) global.db.data.users[jid].limit = limitUser;
    //     console.log("Limit Reseted");
    //   },
    //   {
    //     scheduled: true,
    //     timezone: "Asia/Colombo",
    //   }
    // );

    // ## auto recording && typing

    if (config.auto.presence.is) {
      if (config.auto.presence.value == "typing") {
        if (m.chat) conn.sendPresenceUpdate("composing", m.chat);
      } else if (config.auto.presence.value == "recoding") {
        if (m.chat) conn.sendPresenceUpdate("recording", m.chat);
      }
    }
  } catch (err) {
    console.log(err);
  }
};
