/*CMD
  command: /2060
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: МУКА 0,75 в районе Усть-Лабинск 
Выберете способ оплаты:

На банковскую карточку = (1800руб) -  ответ /6
Bitcoin = (0.00724 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1800руб, \n7⃣ Bitcoin =💰0.00724 BTC, \n⬅⬅ Назад
  aliases: 2060
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1800руб" :

Bot.runCommand("/12060"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
