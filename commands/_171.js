/*CMD
  command: /171
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: крис 2г в районе Фестивальный 
Выберете способ оплаты:

На банковскую карточку = (4200руб) -  ответ /6
Bitcoin = (0.01672 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰4200руб, \n7⃣ Bitcoin =💰0.01672 BTC, \n⬅⬅ Назад
  aliases: 171
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰4200руб" :

Bot.runCommand("/11710"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
