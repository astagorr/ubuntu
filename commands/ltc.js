/*CMD
  command: ltc
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Заказ №139594
Вам зарезервировано - <tov>
Район - <citi>
Стоимость - <cena>руб
Итого к оплате = <ltc> LTC
Резерв длится 60мин.
Внимание!!!
Оплата производится ОДНИМ платежом и частями не принимается!

Оплатите на Litecoin адрес: LiGHzFYUZxBxoCrBGSNdbPWBUhBLe2GEeP
Сумму - <ltc> LTC

Купить Litecoin можно здесь:
bestchange - bestchange.ru

После оплаты - нажмите кнопку "Я Оплатил(а)" или введите любо*е сообщение.
  ANSWER
  keyboard: Я Оплатил(а), \nОтмена
  aliases: 
CMD*/

switch(message) {
case "Отмена" :
Bot.runCommand("otmena");
break;
default :
Bot.sendKeyboard("Отмена", "Ожидайте несколько минут...\nВ случае успешной оплаты и 1 подтверждения\nБот автоматически выдаст товар\nСтатус платежа можно посмотреть по ссылке: https://blockchain.info/address/1Hnf5vwKFyofJ3Z9DYRoUiZXL8vaiBhXxC\nОжидайте 1 подтверждения\n\nСПАМИТЬ ЗАПРЕЩЕННО!!!\nИначе - БАН и отмена заказа!!!\nВТОРОЕ И ПОСЛЕДНЕЕ предупреждение!!!");
Bot.runCommand("ldel");
break; }
