// const { Telegraf } = require('telegraf');

// module.exports = async (req, res) => {
//     const bot = new Telegraf("8184163034:AAGpG9AQFKtvufsz6YgGSuVwso2ZeaCtaro");

//     bot.start((ctx) => {
//         ctx.reply('Welcome', {
//             reply_markup: {
//                 keyboard: [[{ text: "HagereCrafts", url: "https://hagerecrafts-cnzi.vercel.app/" }]]
//             }
//         });
//     });

//     await bot.handleUpdate(req.body, res);
// };




const { Telegraf } = require('telegraf')
// const dotenv = require('dotenv').config();
const Token = "8184163034:AAGpG9AQFKtvufsz6YgGSuVwso2ZeaCtaro"
const bot = new Telegraf(Token)
bot.start((ctx) => ctx.reply('Welcome' , { 
  reply_markup : { 
    keyboard: [[{text: "web_app" , web_app : {url :"https://hagerecrafts-cnzi.vercel.app/"}}]],
     },
    }))
bot.launch();
