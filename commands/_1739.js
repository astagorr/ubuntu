/*CMD
  command: /1739
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: крис 2г в районе Приморско-Ахтарск 
Выберете способ оплаты:

На банковскую карточку = (4200руб) -  ответ /6
Bitcoin = (0.01672 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰4200руб, \n7⃣ Bitcoin =💰0.01672 BTC, \n⬅⬅ Назад
  aliases: 1739
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰4200руб" :

Bot.runCommand("/11739"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
