let account = 15;
let debt = 10;
const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (account - debt >= 0) {
      resolve(debt);
      account -= debt;
    } else {
      reject({
        avance: 5,
        nextTimer: 5000,
      });
    }
  }, 2000);
});

promise
  .then((flouss) => {
    console.log("Rabi ibareklek, 93adlek :" + account);
  })
  .catch((newDeal) => {
    console.log(`Diwiw yakhi ${newDeal.avance} flouss heya :X`);
  });
