/*CMD
  command: carta
  help: 
  need_reply: true
  auto_retry_time: 
  answer: 
  keyboard: Отмена
  aliases: 
CMD*/

switch(message) {
case "⬅⬅ Назaд" :
Bot.runCommand("vbr");
break;
default :
Bot.runCommand("card");
break; }
