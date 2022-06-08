let Map = {
  name: "Oleg",
  age: 38,
  married: true,
};
for (let key in Map) {
  console.log(`Ключ - ${key}, значение - ${Map[key]}`);
}
