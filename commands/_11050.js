/*CMD
  command: /11050
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
ВНИМАНИЕ!!!
Оплата принимается ТОЛЬКО С QIWI КОШЕЛЬКА
Пришлите номер Qiwi кошелька, с которого будет производиться оплата
Номер присылать в формате без плюса 79xxxxxxxxxx
  ANSWER
  keyboard: ⬅⬅ Назад
  aliases: 
CMD*/

if(data.message>=79000000000)  { 
Bot.sendKeyboard("Отмена", "Заказ  №131867\n\nВам зарезервировано - Мука 0,5 \nРайон - тихорецк \nСтоимостью -1300руб\nИтого к оплате -  1300руб\n \nОплатите на банковскую карточку\n4890494620695247\nСумму -1300руб\n\n!!!ОПЛАТА ПРИНИМАЕТСЯ ТОЛЬКО С КИВИ КОШЕЛЬКА!!!\n\n\nРезерв длится 60мин. В течении этого времени оплатите заказ.\nВНИМАНИЕ!!!\nСПАМИТЬ ЗАПРЕЩЕННО!!! ");
   }else 
if(data.message>79999999999) {
Bot.sendMessage("Неверный формат номера!!!\nВНИМАНИЕ!!!\nОплата принимается ТОЛЬКО С QIWI КОШЕЛЬКА\nПришлите номер Qiwi кошелька, с которого будет производиться оплата\nНомер присылать в формате без плюса 79xxxxxxxxxx"); }
else if(data.message=="⬅⬅ Назад") {
Bot.runCommand("/33");
   }



