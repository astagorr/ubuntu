/*CMD
  command: /1934
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Вы выбрали: чай 10г в районе Кропоткин 
Выберете способ оплаты:

На банковскую карточку = (3000руб) -  ответ /6
Bitcoin = (0.01191 BTC) -
ответ - /7
  ANSWER
  keyboard: 6⃣На банковскую карточку =💰3000руб, \n7⃣ Bitcoin =💰0.01191 BTC, \n⬅⬅ Назад
  aliases: 1934
CMD*/

switch(message) {
case "/6" :
case "6" :
case "6⃣На банковскую карточку =💰3000руб" :

Bot.runCommand("/11934"); }
switch(message) {
case "⬅⬅ Назад":
Bot.runCommand("/33"); }
