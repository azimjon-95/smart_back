const TelegramBot = require("node-telegram-bot-api");
const bot = new TelegramBot(process.env.BOT_TOKEN);
const express = require('express')
const router = express.Router()
const Telegram = require("../models/Telegram");
router.post('/message', (req, res) => {
    const { number, info } = req.body;

    const today = new Date();

    // Get current time components
    const month = (today.getMonth() + 1);
    const day = today.getDate();
    const hours = today.getHours();
    const minutes = today.getMinutes();

    const time24 = `${month}.${day}.${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;
    let infostring = JSON.stringify(info)
    let newInfo = infostring.split(",").join("\n").slice(1, -1)
    const chatId = process.env.CHAT_ID;
    const text = `Yangi xabar:\nInfo: ${newInfo}\nPhoneNumber: ${number}\nTime:${time24}`;


    async function savedatabase() {
        try {
            const telegramdata = await Telegram.create({
                info,
                number,
                time: time24,
            });
            await bot.sendMessage(chatId, text)

            await telegramdata.save();


            res.status(200).send("hammasi ok");

        } catch (err) {
            res.status(400).json("serverda xatolik!");
        }
    }
    savedatabase()

});

module.exports = router