let newUser = 0;
let newEntry = 0;
let n = prompt('enter a number');

for (i = 1; i <= n; i++) {
    newUser = prompt('enter new number');
    newEntry = Number(newEntry) + Number(newUser);
}
console.log(newEntry)





