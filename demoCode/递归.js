let arr = [0, 1];
const LENGTH = 10;
function fn(props) {
  let length = props.length;
  let xx = props[length - 1] + props[length - 2];
  props.push(xx);
  props.length < LENGTH ? fn(props) : "";
}
fn(arr);
console.log(arr);//[ 0, 1, 1, 2, 3, 5, 8, 13, 21, 34 ]
