const { Telegraf } = require('telegraf')
const Token = "8184163034:AAGpG9AQFKtvufsz6YgGSuVwso2ZeaCtaro"
const bot = new Telegraf(Token)
bot.start((ctx) => ctx.reply('Welcome' , { 
  reply_markup : { 
    keyboard: [[{text: "HagereCrafts" , web_app : {url :"https://hagerecrafts-cnzi.vercel.app/"}}]],
     },
    }))
bot.launch();
