const array1 = [1,30,39,29,10,13];

function somme (accumulateur, currentVal) {
    return accumulateur + currentVal
}

(accumulateur, currentVal) => accumulateur + currentVal

/* console.log(array1.reduce(somme, 1));  */
const id = setInterval(
    () => {
        if (!i) {
            console.log('BOOOM');
            clearInterval(id);
        } else {
            console.log(i--);
        }
    },
    1000
)
const t = [1,3,4,5,8]; 

const produit = (...args) => args.reduce((accum, current) => accum * current ,1);
console.log(produit(...t));
let i = 5;
