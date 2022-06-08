let arr = [1, 2, 3, 4, "a", "df"];
let chet = 0,
  nech = 0;
for (let i = 0; i < arr.length; i++) {
  if (typeof arr[i] === "number") {
    if (arr[i] % 2 === 0) {
      chet++;
    } else if (arr[i] % 2 !== 0) {
      nech++;
    }
  }
}

console.log("Kol vo cetnux: " + chet + ", " + "Kol vo nechet: " + nech);
