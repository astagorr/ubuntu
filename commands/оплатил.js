/*CMD
  command: оплатил
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Ожидайте несколько минут
Проверяем...

Спамить запрещено! Иначе - БАН и отмена заказа!!!
  ANSWER
  keyboard: Отмена
  aliases: я оплатил(а), я оплатил
CMD*/

if(data.message!="Отмена") {
Bot.sendMessage("Ожидайте несколько минут\nПроверяем...\n\nСпамить запрещено!\nИначе - БАН и отмена заказа!!!\nПЕРВОЕ и ПОСЛЕДНЕЕ Предупреждение!!!");
Bot.runCommand("Отмена"); }
