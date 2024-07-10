// const salut = async ()=>{
//   return "salut"
// }
// const maFunction = async()=>{
//     const resultat = await salut()
//     console.log(resultat);
//     return resultat
// }
// maFunction()

// var semaine = [ 'lun', 'mra', 'mer', 'jeu', 'ven', 'sam', 'ddi' ]
// semaine.pop()
// console.log(semaine)
// var mois = []

// console.log(semaine.concat(mois));

// const numbers = []
// const allisodd = numbers.every((number)=>{
//     return number % 2 === 0;
// })
// console.log(allisodd);

// const strings = ["salut","hello","hi"]
// strings.every((chaine)=>{
//     return typeof chaine === "string"
// })
// console.log(strings)


// const isStrings = (tableau)=>{
//     if(Array.isArray(tableau)){
//         return tableau.every((element)=>typeof element ==="string")
//     }
//     return 1
// }

// console.log(isStrings(strings));




// const numbersOnly = (tableau)=>{
//     if(Array.isArray(tableau)){
//         return tableau.filter
//     }
//     return -1
// }
// console.log(numbersOnly);


// const number = [1,"hello","hi",30]
// const panier = [{title:"basket", price:2000, quantitt:5, inStock:true}]
// number.reduce((accumulateur, currentElement) =>{
//     accumulateur[currentElement.toString()] = currentElement
//     return accumulateur
// }, {})