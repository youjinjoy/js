let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];

let tips=[];
let totals=[];

let calcTip = function (price){
  return (price>=30 && price<=150 ? price*0.15 : price*0.2)
}

for (let bill of bills){
  const tip = calcTip(bill);
  tips.push(tip);
  totals.push(tip+bill);
}

console.log(tips, totals);