/*CMD
  command: /1645
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: Меф 0,5г в районе Армавир 
Выберете способ оплаты:

На банковскую карточку = (1500руб) -  ответ /6
Bitcoin = (0.00597 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1500руб, \n7⃣ Bitcoin =💰0.00597 BTC, \n⬅⬅ Назад
  aliases: 1645
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1500руб" :

Bot.runCommand("/11645"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
