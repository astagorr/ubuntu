/*CMD
  command: /1917
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: чай 10г в районе Пос.Южный 
Выберете способ оплаты:

На банковскую карточку = (3000руб) -  ответ /6
Bitcoin = (0.01191 BTC) -
ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰4200руб, \n7⃣ Bitcoin =💰0.01672 BTC, \n⬅⬅ Назад
  aliases: 1917
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰3000руб" :

Bot.runCommand("/11917"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
