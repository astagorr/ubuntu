/*CMD
  command: /1145
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: Крис 0,5  в районе Армавир 
Выберете способ оплаты:

На банковскую карточку = (1400руб) -  ответ /6
Bitcoin = (0.00561 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1400руб, \n7⃣ Bitcoin =💰0.00561 BTC, \n⬅⬅ Назад
  aliases: 1145
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1400руб" :

Bot.runCommand("/11145"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
