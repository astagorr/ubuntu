/*CMD
  command: /1523
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: крис 1г  в районе Хлапчато-бумажный комбинат 
Выберете способ оплаты:

На банковскую карточку = (2300руб) -  ответ /6
Bitcoin = (0.00922 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰2300руб, \n7⃣ Bitcoin =💰0.00922 BTC, \n⬅⬅ Назад
  aliases: 1523
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰2300руб" :

Bot.runCommand("/11523"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
