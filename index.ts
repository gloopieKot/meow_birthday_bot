const TelegramBot = require('node-telegram-bot-api');
const token = '7595294479:AAH109XcxZApQb-OP2OzytTKi_81yZ2bj3E';
const bot = new TelegramBot(token, {polling: true});


bot.on('message', (msg:any) => {
    const chatId = msg.chat.id;
    bot.sendMessage(chatId, msg.text);
});

