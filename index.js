const TelegramApi = require("node-telegram-bot-api");
const token = "";
const bot = new TelegramApi(token, { polling: true });

const start = () => {
  bot.setMyCommands([
    { command: "/start", description: "Перезапуск бота" },
    { command: "/info", description: "Информация о астрономических событиях" },
    { command: "/help", description: "Помощь" },
  ]);
  bot.on("message", async (msg) => {
    const text = msg.text;
    const chatId = msg.chat.id;
    if (text === "/start") {
      return bot.sendMessage(
        chatId,
        "Привет! Это бот для астрономов-любителей, которые хотят знать о всех-всех астрономических событиях своего региона!"
      );
    }
    if (text === "/info") {
      return bot.sendMessage(
        chatId,
        "Отправь название своего региона, чтобы мы смогли отправить тебе новые астрономические события в твоем регионе!"
      );
    }
    if (text === "/help") {
      return bot.sendMessage(
        chatId,
        "Список команд:\n /start - перезапуск бота\n /info - найти информацию о своем регионе\n /help - список команд"
      );
    }
    if (text === "Марий Эл") {
      return bot.sendMessage(chatId, "Gjy"); // я сделал Марий Эл, потому что это мой регион:) Остальные потом сделаю!
    }
    return bot.sendMessage(chatId, "Я тебя не понимаю, помощь - /help");
  });
};

start();
