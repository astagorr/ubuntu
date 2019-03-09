/*CMD
  command: /start
  help: 
  need_reply: 
  auto_retry_time: 
  answer: 
  keyboard: 
  aliases: start, старт, ⓜ главное меню, ⬅⬅ назад
CMD*/

switch (user.username) {
case null :
Bot.runCommand("ban");
break;
default :
Bot.runCommand("go"); }
