/*CMD
  command: /1763
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: крис 2г в районе Абинск 
Выберете способ оплаты:

На банковскую карточку = (4200руб) -  ответ /6
Bitcoin = (0.01672 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰4200руб, \n7⃣ Bitcoin =💰0.01672 BTC, \n⬅⬅ Назад
  aliases: 1763
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰4200руб" :

Bot.runCommand("/11763"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
