/*CMD
  command: /1635
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: Меф 0,5г в районе Славянск-на -Кубани 
Выберете способ оплаты:

На банковскую карточку = (1500руб) -  ответ /6
Bitcoin = (0.00597 BTC) - ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰1500руб, \n7⃣ Bitcoin =💰0.00597 BTC, \n⬅⬅ Назад
  aliases: 1635
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰1500руб" :

Bot.runCommand("/11635"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
