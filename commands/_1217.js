/*CMD
  command: /1217
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: чай 5г в районе Пос.Южный 
Выберете способ оплаты:

На банковскую карточку = (2000руб) -  ответ /6
Bitcoin = (0.00635 BTC) -
ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰3000руб, \n7⃣ Bitcoin =💰0.01191 BTC, \n⬅⬅ Назад
  aliases: 1217
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰2000руб" :

Bot.runCommand("/11217"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
