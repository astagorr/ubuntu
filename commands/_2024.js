/*CMD
  command: /2024
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: МУКА 0,75 в районе Комсомольский/ 
Выберете способ оплаты:

На банковскую карточку = (1800руб) -  ответ /6
Bitcoin = (0.00724 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1800руб, \n7⃣ Bitcoin =💰0.00724 BTC, \n⬅⬅ Назад
  aliases: 2024
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1800руб" :

Bot.runCommand("/12024"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
