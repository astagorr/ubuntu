/*CMD
  command: /1856
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали:  мука 2г в районе Ильский 
Выберете способ оплаты:

На банковскую карточку = (4000руб) -  ответ /6
Bitcoin = (0.01588 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰4000руб, \n7⃣ Bitcoin =💰0.01588 BTC, \n⬅⬅ Назад
  aliases: 1856
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰4000руб" :

Bot.runCommand("/11856"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
