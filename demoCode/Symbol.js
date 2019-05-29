let s = new Set([0, 12, 3456]);
s.add("100").add(100);
console.log(s);
console.log(typeof s);
// "symbol"
const a = [[1, 2], [3, 4]];
const ws = new WeakSet(a);
const obj =s;
ws.add(obj);
console.log(ws);
