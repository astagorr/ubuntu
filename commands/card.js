/*CMD
  command: card
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Заказ №138754

Вам зарезервировано - <tov>
Район - <citi>
Стоимостью - <cena>руб
Итого к оплате - <cena>руб

Оплатите на банковскую карточку :
4890494575630884
Сумму - <cena>руб

!!!ОПЛАТА ПРИНИМАЕТСЯ ТОЛЬКО С КИВИ КОШЕЛЬКА!!!


Резерв длится 60мин. В течении этого времени оплатите заказ.
ВНИМАНИЕ!!!
СПАМИТЬ ЗАПРЕЩЕННО!!!
  ANSWER
  keyboard: Отмена
  aliases: 
CMD*/

switch(message) {
case "Отмена" :
Bot.sendKeyboard("Ⓜ Главное меню", "Заказ отменен.\nЗапрещено резервировать товар без оплаты более трех раз\nПЕРВОЕ ПРЕДУПРЕЖДЕНИЕ");
break;
default :
Bot.sendMessage("Ожидайте несколько минут\nПроверяем...\n\nСпамить запрещено. ПЕРВОЕ предупреждение!Иначе - БАН и отмена заказа!!!");
Bot.runCommand("zhdi");
break; }

