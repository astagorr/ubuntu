/*CMD
  command: /1363
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: чай 3г в районе Абинск 
Выберете способ оплаты:

На банковскую карточку = (1500руб) -  ответ /6
Bitcoin = (0.00479 BTC) -
ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1500руб, \n7⃣ Bitcoin =💰0.00479 BTC, \n⬅⬅ Назад
  aliases: 1363
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1500руб" :

Bot.runCommand("/11363"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
