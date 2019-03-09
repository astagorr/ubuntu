/*CMD
  command: delay
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: 
CMD*/

User.getProperty("cena");
var bt=User.getProperty("cena")/240815;
var lt=User.getProperty("cena")/1845;
var rub=User.getProperty("cena");
var btc=(bt.toFixed(5));
var ltc=(lt.toFixed(5));
switch(message) {
case "/6" :
case "6" :
case "6⃣ На банковскую карточку = 💰"+rub+"руб" :
Bot.sendKeyboard("⬅⬅ Назaд", "ВНИМАНИЕ!!!\nОплата принимается ТОЛЬКО С QIWI КОШЕЛЬКА\nПришлите номер Qiwi кошелька, с которого будет производиться оплата\nНомер присылать в формате без плюса 79xxxxxxxxxx");
Bot.runCommand("carta");
break;
case "7" : 
case "/7" :
case "7⃣ Bitcoin ="+btc+" BTC" :
Bot.runCommand("btc");
break;
case "8" : 
case "/8" :
case "8⃣Litecoin ="+ltc+" LTC" :
Bot.runCommand("ltc");
break;}
