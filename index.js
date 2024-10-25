"use strict";
// import { Telegraf } from 'telegraf';
//const birthdays = { };//Объект для хранения др
//обработчик,спрашивает типа скажи дату в таком то формате
//сохранение даты, не абыть про id пользователя
//вернуть дату по запросу
const TelegramBot = require('node-telegram-bot-api');
const token = '7595294479:AAH109XcxZApQb-OP2OzytTKi_81yZ2bj3E';
const bot = new TelegramBot(token, { polling: true });
bot.on('message', (msg) => {
    const chatId = msg.chat.id;
    // send a message to the chat acknowledging receipt of their message
    bot.sendMessage(chatId, msg.text);
});
