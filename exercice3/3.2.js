let note = []
som = 0;
for( i=0; i<5; i++){
  rep = Number(prompt("entre un nombre"))
  note.push(rep)
}

for (let elem of note){
 som = som + elem
}
larg = note.length
console.log(som / larg)