/*CMD
  command: /1417
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: Мука 1г  в районе Пос.Южный 
Выберете способ оплаты:

На банковскую карточку = (2200руб) -  ответ /6
Bitcoin = (0.00882 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1900руб, \n7⃣ Bitcoin =💰0.00764 BTC, \n⬅⬅ Назад
  aliases: 1417
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰2200руб" :

Bot.runCommand("/11417"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
