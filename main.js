var Bank = function (name) {
  this.name = name;
  this.balance = 0;
};
Bank.prototype.plusMoney = function(money) {
  this.balance += money
  console.log(this.name+", you have now "+this.balance+"$");
};
Bank.prototype.drawMoney = function(money) {
if(this.balance < money)
{
console.log('you have not enough money bro!');
}
else{
this.balance -= money
  console.log(this.name+", you have now "+this.balance+"$");
  }
};
//example bank account
var person = new Bank('Shaiq');
person.plusMoney(1500);
person.drawMoney(500);
