let tab = []
sum = 0;
for( i=0; i<5; i++){
  nombre = Number(prompt("entre un nombre"))
  tab.push(nombre)
}

for (let elem of tab){
 sum = sum + elem
}
console.log(sum)




