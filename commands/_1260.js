/*CMD
  command: /1260
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: ча/й 5г в районе Усть-Лабинск 
Выберете способ оплаты:

На банковскую карточку = (2000руб) -  ответ /6
Bitcoin = (0.00635 BTC) -
ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰2000руб, \n7⃣ Bitcoin =💰0.00635 BTC, \n⬅⬅ Назад
  aliases: 1260
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰2000руб" :

Bot.runCommand("/11260"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
