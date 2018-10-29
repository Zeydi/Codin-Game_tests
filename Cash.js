function findReturn(cash) {
  let two = 0;
  let five = 0;
  let ten = 0;
  if (cash == 1 || cash == 3) {
    return null;
  }
  if (cash % 10 == 1) {
    let x = cash - 6;
    ten = Math.trunc(x / 10);
    five = 1;
    two = 3;
  } else if (cash % 10 == 3) {
    let x = cash - 8;
    ten = Math.trunc(x / 10);
    five = 1;
    two = 4;
  } else {
    ten = Math.trunc(cash / 10);
    if ((cash % 10) % 2 == 0) {
      five = 0;
      two = Math.trunc((cash % 10) / 2);
    } else {
      five = 1;
      two = Math.trunc(((cash % 10) % 5) / 2);
    }
  }
  return {
    two,
    five,
    ten
  };
}
console.log(change(8));
