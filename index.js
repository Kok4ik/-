const TelegramApi = require("node-telegram-bot-api");
const token = "";
const bot = new TelegramApi(token, { polling: true });
const news = {
  text: "Здесь пока ничего нет",
};
const CentrFO = {
  text: "Здесь пока ничего нет",
};
const CZFO = {
  text: "Здесь пока ничего нет",
};
const UFO = {
  text: "Здесь пока ничего нет",
};
const CKFO = {
  text: "Здесь пока ничего нет",
};
const PFO = {
  text: "Здесь пока ничего нет",
};
const UrFO = {
  text: "Здесь пока ничего нет",
};
const CFO = {
  text: "Здесь пока ничего нет",
};
const DFO = {
  text: "Здесь пока ничего нет",
};
const regionOptions = {
  reply_markup: JSON.stringify({
    inline_keyboard: [
      [
        { text: "ЦФО", callback_data: "ЦФО" },
        { text: "СЗФО", callback_data: "СЗФО" },
        { text: "ЮФО", callback_data: "ЮФО" },
      ],
      [
        { text: "СКФО", callback_data: "СКФО" },
        { text: "ПФО", callback_data: "ПФО" },
        { text: "УрФО", callback_data: "УрФО" },
      ],
      [
        { text: "СФО", callback_data: "СФО" },
        { text: "ДВФО", callback_data: "ДВФО" },
      ],
    ],
  }),
};
// const adminRegionOptions = {
//   reply_markup: JSON.stringify({
//     inline_keyboard: [
//       [
//         { text: "ЦФО", callback_data: "/ЦФО" },
//         { text: "СЗФО", callback_data: "/СЗФО" },
//         { text: "ЮФО", callback_data: "/ЮФО" },
//       ],
//       [
//         { text: "СКФО", callback_data: "/СКФО" },
//         { text: "ПФО", callback_data: "/ПФО" },
//         { text: "УрФО", callback_data: "/УрФО" },
//       ],
//       [
//         { text: "СФО", callback_data: "/СФО" },
//         { text: "ДВФО", callback_data: "/ДВФО" },
//       ],
//     ],
//   }),
// };
const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Перезапуск бота" },
    { command: "/info", description: "Информация об астрономических событиях" },
    { command: "/help", description: "Помощь" },
  ]);

  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    // if (text === "админ") {
    //   return bot.sendMessage(
    //     chatId,
    //     "Ты зашел в меню администратора. Здесь ты можешь добавить астрономические новости для региона.\nВыбери из списка ниже название округа.",
    //     adminRegionOptions
    //   );
    // }
    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        "Привет! Это бот для астрономов-любителей, которые хотят знать о всех-всех астрономических событиях своего федерального округа!"
      );
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        "Выбери федеральный округ, чтобы мы смогли отправить тебе новые астрономические события в твоем федеральном округе!",
        regionOptions
      );
    }
    if (text === "/help") {
      return bot.sendMessage(
        chatId,
        "Список команд:\n /start - перезапуск бота\n /info - найти информацию о своем федеральном округе\n /help - список команд"
      );
    }
    return bot.sendMessage(chatId, "Я тебя не понимаю, помощь - /help");
  });
  bot.on("callback_query", (msg) => {
    const data = msg.data;
    const chatId = msg.message.chat.id;
    if (data == "ЦФО") {
      return bot.sendMessage(chatId, CentrFO.text);
    }
    if (data == "СЗФО") {
      return bot.sendMessage(chatId, CZFO.text);
    }
    if (data == "ЮФО") {
      return bot.sendMessage(chatId, UFO.text);
    }
    if (data == "СКФО") {
      return bot.sendMessage(chatId, CKFO.text);
    }
    if (data == "ПФО") {
      return bot.sendMessage(chatId, PFO.text);
    }
    if (data == "УрФО") {
      return bot.sendMessage(chatId, UrFO.text);
    }
    if (data == "СФО") {
      return bot.sendMessage(chatId, CFO.text);
    }
    if (data == "ДВФО") {
      return bot.sendMessage(chatId, DFO.text);
    }
  });
};

start();
