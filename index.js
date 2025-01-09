
// const { Telegraf } = require('telegraf')
// // const dotenv = require('dotenv').config();
// const Token = "8184163034:AAGpG9AQFKtvufsz6YgGSuVwso2ZeaCtaro"
// const bot = new Telegraf(Token)
// bot.start((ctx) => ctx.reply('Welcome' , { 
//   reply_markup : { 
//     keyboard: [[{text: "web_app" , web_app : {url :"https://hagerecrafts-cnzi.vercel.app/"}}]],
//      },
//     }))
// bot.launch();

const { Telegraf } = require('telegraf');
const Token = "8184163034:AAGpG9AQFKtvufsz6YgGSuVwso2ZeaCtaro"
const bot = new Telegraf(Token);

// Flag to track bot state
let isBotRunning = false;

// Handler for bot start command
bot.start((ctx) => {
  if (!isBotRunning) {
    isBotRunning = true;
    ctx.reply('Welcome', {
      reply_markup: {
        keyboard: [[{ text: "web_app", web_app: { url: "https://hagerecrafts-cnzi.vercel.app/" } }]]
      }
    });
  } else {
    ctx.reply('Bot is already running.');
  }
});

// Launch the bot
if (!isBotRunning) {
  bot.launch();
}
