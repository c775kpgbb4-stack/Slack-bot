require('dotenv').config();
const { App } = require('@slack/bolt');

const app = new App({
  token: process.env.SLACK_BOT_TOKEN,
  appToken: process.env.SLACK_APP_TOKEN,
  socketMode: true,
});

// Command 1: Ping / Health Check
app.command('/goody-ping', async ({ command, ack, respond }) => {
  await ack();
  await respond("🏓 Pong! Goody's bot is live!");
});

// Command 2: Dice Roller
app.command('/goody-roll', async ({ command, ack, respond }) => {
  await ack();
  const roll = Math.floor(Math.random() * 6) + 1;
  await respond(`🎲 You rolled a **${roll}**!`);
});

// Command 3: Tech Quote
app.command('/goody-quote', async ({ command, ack, respond }) => {
  await ack();
  await respond("💬 *Quote:* First, solve the problem. Then, write the code.");
});

(async () => {
  await app.start();
  console.log('⚡️ Goody\'s Slack Bot is running!');
})();