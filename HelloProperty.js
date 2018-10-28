const object1 = {
  a: 1,
  b: 2,
  c: 3
};

function HelloProperties(obj) {
  let objArray = Object.getOwnPropertyNames(obj);
  return objArray.map(prop => {
    return "Hello" + prop;
  });
}
console.log(HelloProperties(object1));
