const tab = [1,11,12,2,21,3,4,51,5];

function process(val, indice, tableauBidou) {
    console.log('iteration', indice);
    console.log('sa valeur', val);
}

function compare(a, b) {
    return a-b
}
console.log(tab.sort(compare));
/* tab.forEach(process); */
const t = [1,2];
let i = 5;
function somme(accumulateur,currentVal){return accumulateur+currentVal; }

const somme = (accumulateur,currentVal) => accumulateur+currentVal; 
const intervalId = setInterval(() => {
    if(i > 0) {
        console.log(i--);
    } else {
        console.log('End :(');
        clearInterval(intervalId);
    }
}, 1000)
constarray1=[1,30,39,29,10,13];
console.log(
array1.reduce(
	somme, 1 
  )
);


function f(...args) {
    return args.reduce(
        (acc, current) => acc + current
    )
}

let start = 5
const index = setInterval(
    ()=>{
        if (start) {
            console.log(start--);
        } else {
            console.log('Fin :');
            clearInterval(index);
        }
    },
    1000
)