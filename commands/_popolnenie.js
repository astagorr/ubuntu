/*CMD
  command: /popolnenie
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Введите целую сумму пополнения без копеек в руб
(* Минимальна сумма 50руб)
  ANSWER
  keyboard: ⬅⬅ Назад
  aliases: пополнить счет
CMD*/

User.setProperty("cena", message, "text");
var bt=User.getProperty("cena")/245950;
var lt=User.getProperty("cena")/22045;
var btc=(bt.toFixed(5));
var ltc=(lt.toFixed(5));
User.setProperty("btc", btc, "text");
User.setProperty("ltc", ltc, "text");
Bot.sendKeyboard("4⃣Bitcoin ="+btc+" BTC, \n5⃣Litecoin ="+ltc+" LTC, \n⬅⬅ Назад", "Пополнение счета на <cena>руб\nВыберете метод оплаты:\n\nBitcoin = ("+btc+" BTC) - ответ - /4\nLitecoin = ("+ltc+" LTC) - ответ - /5");
switch (message) {
case "⬅⬅ Назад" :
Bot.runCommand("/kabinet");
break;
default :
Bot.runCommand("popl");
break; }
