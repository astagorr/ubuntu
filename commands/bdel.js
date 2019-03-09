/*CMD
  command: bdel
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

if(data.message=="Отмена") {
Bot.runCommand("otmena"); }
else {
Bot.sendKeyboard("Отмена", "Ожидайте несколько минут...\nВ случае успешной оплаты и 1 подтверждения\nБот автоматически выдаст товар\nСтатус платежа можно посмотреть по ссылке: https://blockchain.info/address/1Hnf5vwKFyofJ3Z9DYRoUiZXL8vaiBhXxC\nОжидайте 1 подтверждения\n\nСПАМИТЬ ЗАПРЕЩЕННО!!!\nИначе - БАН и отмена заказа!!!\nВТОРОЕ И ПОСЛЕДНЕЕ предупреждение!!!");
Bot.runCommand("bdel");
}
