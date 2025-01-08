const { Telegraf } = require('telegraf');
require('dotenv').config();

const BOT_TOKEN = process.env.TOKEN;

if (!BOT_TOKEN) {
    console.error('Telegram bot token is missing in environment variables.');
    process.exit(1);
}

const bot = new Telegraf(BOT_TOKEN);

bot.start((ctx) => {
    ctx.reply('Welcome', {
        reply_markup: {
            keyboard: [[{ text: "web_app", url: "https://hagerecrafts-cnzi.vercel.app/" }]]
        }
    });
});

bot.launch();