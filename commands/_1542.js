/*CMD
  command: /1542
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: крис 1г  в районе Новокубанск 
Выберете способ оплаты:

На банковскую карточку = (2300руб) -  ответ /6
Bitcoin = (0.00922 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰2300руб, \n7⃣ Bitcoin =💰0.00922 BTC, \n⬅⬅ Назад
  aliases: 1542
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰2300руб" :

Bot.runCommand("/11542"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
