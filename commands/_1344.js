/*CMD
  command: /1344
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: чай 3г в районе Пластуновская 
Выберете способ оплаты:

На банковскую карточку = (1500руб) -  ответ /6
Bitcoin = (0.00479 BTC) -
ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1500руб, \n7⃣ Bitcoin =💰0.00479 BTC, \n⬅⬅ Назад
  aliases: 1344
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1500руб" :

Bot.runCommand("/11344"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
