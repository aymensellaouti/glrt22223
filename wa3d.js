let account = 15;
let kadechIssalni = 10;

const wa3d = new Promise((noufi, maNoufich) => {
  setTimeout(() => {
    if (account > kadechIssalni) {
      noufi(kadechIssalni);
      account -= kadechIssalni;
    } else {
      maNoufich({
        nssaba9: account,
        stanaA3leya: 7,
      });
    }
  }, 2000);
});

setTimeout(() => {
  account -= Math.ceil(Math.random() * account);
}, 1000);
const success = (floussi) => {
    console.log("I3aychek Ya3tik essa7a, rahou 93adlek fel compte", account);
  };
wa3d
  .then(success)
  .catch((message) => {
    console.log(`Iabta yakhi ${message.nssaba9} chwaya a3leya`);
  });
