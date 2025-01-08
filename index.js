const { Telegraf } = require('telegraf');
require('dotenv').config();

const BOT_TOKEN = process.env.TOKEN;

if (!BOT_TOKEN) {
    console.error('Telegram bot token is missing in environment variables.');
    process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

// Set up a webhook for Telegram bot
const PORT = process.env.PORT || 3000; // You can set the port as required
const URL = "https://hagerecrafts-cnzi.vercel.app"

bot.telegram.setWebhook(`${URL}/bot${BOT_TOKEN}`);
bot.startWebhook(`/bot${BOT_TOKEN}`, null, PORT);

bot.start((ctx) => {
    ctx.reply('Welcome', {
        reply_markup: {
            keyboard: [[{ text: "web_app", url: "https://hagerecrafts-cnzi.vercel.app/" }]]
        }
    });
});

// Start the bot
bot.launch()
    .then(() => console.log(`Bot is running on port ${PORT}`))
    .catch((err) => console.error(`Error starting bot: ${err}`));