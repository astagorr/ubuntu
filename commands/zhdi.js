/*CMD
  command: zhdi
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

switch(message) {
case "Отмена" :
Bot.sendKeyboard("Ⓜ Главное меню", "Заказ отменен.\nЗапрещено резервировать товар без оплаты более трех раз\nПЕРВОЕ ПРЕДУПРЕЖДЕНИЕ");
break;
default :
Bot.sendMessage("Ожидайте несколько минут\nПроверяем...\n\nСпамить запрещено. ВТОРОЕ и ПОСЛЕДНЕЕ предупреждение!Иначе - БАН и отмена заказа!!!");
Bot.runCommand("tmena");
break; }
