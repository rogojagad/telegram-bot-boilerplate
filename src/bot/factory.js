require("dotenv").config();

const TelegramBot = require("node-telegram-bot-api");
const token = process.env.TELEGRAM_TOKEN;

exports.createOne = () => {
    if (process.env.NODE_ENV === "production") {
        console.log("Starting bot on webhook mode");
        const bot = new TelegramBot(token);
        return bot;
    } else {
        console.log("Starting bot on polling mode");
        return new TelegramBot(token, { polling: true });
    }
};
