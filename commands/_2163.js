/*CMD
  command: /2163
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: КРИС 0,75 в районе Абинск 
Выберете способ оплаты:

На банковскую карточку = (1900руб) -  ответ /6
Bitcoin = (0.00764 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1900руб, \n7⃣ Bitcoin =💰0.00764 BTC, \n⬅⬅ Назад
  aliases: 2163
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1900руб" :

Bot.runCommand("/12163"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
