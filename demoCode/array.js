const arr = [0, 1, 2, 3, 4, 5];

let newArr = arr.reduce((pre, next) => {
  return pre + next;
});

console.log(newArr);

let newArr1 = arr.some((item, index) => {
  return item > 0;
});

console.log(newArr1);

let newArr2 = arr.every((item, index) => {
  console.log(index);
  return item > 0;
});

console.log(newArr2);

var users = [
  { name: "Jill", id: 1 },
  { name: "Alex", id: 2 },
  { name: "Bill", id: 3 },
  { name: "Alex", id: 4 }
];
user = users.find(user => {
  return user.name === "Alex";
});

console.log(user, "user");
