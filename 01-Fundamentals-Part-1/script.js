let bill=275;
let tip = (bill>=50 && bill<=300) ? bill*0.2:bill*0.15;

console.log(`The bill was ${bill}, the tip was ${tip}, and the total value ${bill+tip}`);
