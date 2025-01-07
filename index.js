const { Telegraf } = require('telegraf')
const dotenv = require('dotenv').config();
const Token = process.env.TOKEN
const bot = new Telegraf(process.env.BOT_TOKEN || Token)
bot.start((ctx) => ctx.reply('Welcome' , { 
  reply_markup : { 
    keyboard: [[{text: "web_app" , web_app : {url :"https://hagerecrafts-cnzi.vercel.app/"}}]],
     },
    }))
bot.launch();

