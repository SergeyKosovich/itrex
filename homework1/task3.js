function crasher(a) {
  delete a.bla;
}
const a = {
  bla: "bla",
};
Object.seal(a);
crasher(a);
console.log(a);
