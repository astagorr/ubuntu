/*CMD
  command: /1039
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: Мука 0,5 в районе Приморско-Ахтарск 
Выберете способ оплаты:

На банковскую карточку = (1300руб) -  ответ /6
Bitcoin = (0.00517 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1300руб, \n7⃣ Bitcoin =💰0.00517 BTC, \n⬅⬅ Назад
  aliases: 1039
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1300руб" :

Bot.runCommand("/11039"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
