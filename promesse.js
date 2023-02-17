let account = 15;
const kadechIssalni = 10;

const bechNraja3lekFloussek = new Promise(
  (chna3melKanOufitEbWa3dek, chna3melKanMaOufitechEbWa3dek) => {
    setTimeout(() => {
      if (account >= kadechIssalni) {
        chna3melKanOufitEbWa3dek(kadechIssalni);
        account -= kadechIssalni;
      } else {
        chna3melKanMaOufitechEbWa3dek({
          message: "Désolé dkhal cheque ma 3andich Flouss",
          nsaba9lek: account,
          leb9eya: 7,
        });
      }
    }, 2000);
  }
);
setTimeout(() => {
  account -= Math.ceil(Math.random() * account);
}, 1000);
bechNraja3lekFloussek
  .then(() => {
    console.log(`Merci ou rahou 93adlek fel compte ${account}`);
  })
  .catch((message) => {
    console.log(
      `Non mazroub bihom raja3li floussi barcha a3leya ${message.leb9eya}`
    );
  });
