/*CMD
  command: btc
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Заказ №174088
Вам зарезервировано - <tov>
Район - <citi>
Стоимость - <cena>руб
Итого к оплате = <btc> BTC
Резерв длится 60мин.
Внимание!!!
Оплата производится ОДНИМ платежом и частями не принимается!

Оплатите на Bitcoin адрес: 1H7DqCxuVWVAMPg38qpVXhGiTN5nNJ4ssQ
Сумму - <btc> BTC

Купить Bitcoin можно здесь:
bestchange - bestchange.ru

После оплаты - нажмите кнопку "Я Оплатил(а)" или введите любое сообщение.
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
Bot.runCommand("bdel");
break; }
