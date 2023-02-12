/* 

const array1=[1,30,39,29,10,13];
function sommer(accumulateur,currentVal){
 return accumulateur+currentVal;   
}
console.log(array1.reduce(sommer,1));


const somme = (x,y) =>  x + y ;
 */
const t = [1, 2, 3];
function produit(x, y, ...args) {
  return args.reduce((acc, actu) => (acc *= actu), 1);
}
console.log(produit(...t));

user = {
  name: "sellaouti",
  firstname: "aymen",
  age: 40,
  job: "teacher",
};
const aymen = { ...user };
console.log("aymen : ", aymen);
updates = { age: 30, job: "dev" };
user = { ...user, ...updates };
console.log(user);
let i = 5;
const id = setInterval(
    () => {
        if (!i) {
            console.log('BOOM !!!!!');
            clearInterval(id);
        } else {
            console.log(i--);
        }
    },
    1000
);