/*CMD
  command: /popolnenie
  help: 
  need_reply: true
  auto_retry_time: 

  <<ANSWER
Введите целую сумму пополнения без копеек в руб
(* Минимальна сумма 50руб)
  ANSWER
  keyboard: ⬅⬅ Назад
  aliases: пополнить счет
CMD*/

var BTC=message/366950;
var LTC=message/3488;
Bot.sendMessage("Пополнение счета на "+(BTC.toFixed(5))+"руб\nВыберете метод оплаты:\n\nBitcoin = ("+(BTC.toFixed(5))+" BTC) - ответ - /4\nLitecoin = ("+(LTC.toFixed(5))+" LTC) - ответ - /5");

