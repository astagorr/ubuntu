/*CMD
  command: pay
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.getProperty("btc");
User.getProperty("ltc");
User.getProperty("cena");
var btc=User.getProperty("btc");
var ltc=User.getProperty("ltc")
switch (message) {
case "⬅⬅ Назад" :
Bot.runCommand("/kabinet");
break;
case "7" :
case "/7" :
case "7⃣ Bitcoin =1"+btc+"BTC" :
Bot.sendKeyboard("Я Оплатил(а), \nОтменить пополнение Bitcoin", "Заказ №139117\nВам зарезервировано:\nСумму пополнения - <cena>руб\nСтоимостью = "+btc+" BTC\nРезерв длится 60мин.\nВнимание!!!\nОплата производится ОДНИМ платежом и частями не принимается!\n\nОплатите на Bitcoin адрес: 3MFiguwSojLdYh24vLxvFahoZ7bzvFtAyC\nСумму - "+btc+" BTC\n\nКупить Bitcoin можно здесь:\nbestchange - bestchange.ru\nПосле оплаты - нажмите кнопку ''Я Оплатил(а)'' или введите любое сообщение.");
Bot.runCommand("pay");
break;
case "/5" :
case "5" :
case "5⃣ Litecoin = 💰"+ltc+"LTC" :
Bot.sendKeyboard("Я Оплатил(а), \nОтменить пополнение Litecoin", "Заказ №139117\nВам зарезервировано:\nСумму пополнения - <cena>руб\nСтоимостью = "+ltc+" LTC\nРезерв длится 60мин.\nВнимание!!!\nОплата производится ОДНИМ платежом и частями не принимается!\n\nОплатите на Litecoin адрес: MQzyVAGui6RQ7NJMd19NRt7iyja8Rv68vX\nСумму - "+ltc+" LTC\n\nКупить Litecoin можно здесь:\nbestchange - bestchange.ru\nПосле оплаты - нажмите кнопку ''Я Оплатил(а)'' или введите любое сообщение.");
Bot.runCommand("btc");
break;
case "Я Оплатил(а)" :
Bot.sendMessage("Заказ принят.\nВ случае успешной оплаты и 1 подтверждения\nБот автоматически зачислит на Ваш счет <cena>руб\nСтатус платежа можно посмотреть по ссылке: https://live.blockcypher.com/ltc/address/MDg8qmdaMWVB3cb6ToU6ogeJ8dz8XiyHeM\nИли в Личном Кабинете - /kabinet\n\nДождитесь автоматической проверки");
Bot.runCommand("/kabinet");
case "Отменить пополнение Bitcoin" :
case "Отменить пополнение Litecoin" :
Bot.sendMessage("Заказ отменен.\nЗапрещено резервировать товар без оплаты более трех раз\nПЕРВОЕ ПРЕДУПРЕЖДЕНИЕ");
Bot.runCommand("/kabinet");
break; }
