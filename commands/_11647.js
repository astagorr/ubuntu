/*CMD
  command: /11647
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
Bot.sendKeyboard("Отмена", "Заказ  №131867\n\nВам зарезервировано - Меф 0,5г \nРайон - Старая Станица АРМАВИР \nСтоимостью -1500руб\nИтого к оплате -  1500руб\n \nОплатите на банковскую карточку\n4890494620695247\nСумму -1500руб\n\n!!!ОПЛАТА ПРИНИМАЕТСЯ ТОЛЬКО С КИВИ КОШЕЛЬКА!!!\n\n\nРезерв длится 60мин. В течении этого времени оплатите заказ.\nВНИМАНИЕ!!!\nСПАМИТЬ ЗАПРЕЩЕННО!!! ");
   }else 
if(data.message>79999999999) {
Bot.sendMessage("Неверный формат номера!!!\nВНИМАНИЕ!!!\nОплата принимается ТОЛЬКО С QIWI КОШЕЛЬКА\nПришлите номер Qiwi кошелька, с которого будет производиться оплата\nНомер присылать в формате без плюса 79xxxxxxxxxx"); }
else if(data.message=="⬅⬅ Назад") {
Bot.runCommand("/33");
   }



