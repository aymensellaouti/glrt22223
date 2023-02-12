let compteMta3i = 15;
let kadechIsalni = 10;

const wa3di = new Promise((ithaKanOufit, ithakanMaOufitech) => {
  setTimeout(() => {
    if (compteMta3i > kadechIsalni) {
      ithaKanOufit(kadechIsalni);
      compteMta3i -= kadechIsalni;
    } else {
      ithakanMaOufitech({
        message: "désolé ma khlatech nlem leflouss",
        bechNssaba9lek: compteMta3i,
        leb9eyaDans: 7,
      });
    }
  }, 2000);
});

wa3di
  .then((montant) => {
    console.log(`ya3tik essa7a ikather khirek, 
    mazel fel compte ${compteMta3i}`);
  })
  .catch((messageMta3ou) => {
    console.log(`Rahou ${messageMta3ou.leb9eyaDans} barcha 3leya,
        Raaja3li floussi la nechki bik
        `);
  });

setTimeout(() => {
  compteMta3i -= Math.ceil(Math.random() * compteMta3i);
}, 1000);
