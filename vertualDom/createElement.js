class Element {
  constructor(type, props, children) {
    this.type = type;
    this.props = props;
    this.children = children;
  }
}

function createElement(type, props, children) {
  return new Element(type, props, children);
}

console.log(createElement("ul", { calss: "div" }), ["100"]);

let vertualDom = createElement("ul", { calss: "list" }, [
  createElement("li", { calss: "item" }, ["div"]),
  createElement("li", { calss: "item" }, ["div"]),
  createElement("li", { calss: "item" }, ["div"])
]);

function setAttribute(node, key, att) {
  let specialNode = ["input", "textarea"];
  let specialAttr = ["style"];
  console.log(node,"node")
  let  nodeStr= /<([A-Z][A-Z0-9]*)[^>]*>/
  console.log(String(node).match(nodeStr))

  if (specialNode.includes(node.toLowerCase()) && key === "value") {
    node[key] = att;
    return;
  }

  if (specialAttr.includes(key)) {
    node.style.cssText = att;
    return;
  }

  node.setAttribute(key, att);
}
function render({ type, props, children }) {
  let el = document.createElement(type);

  for (const key in props) {
    console.log(key);
    if (props.hasOwnProperty(key)) {
      setAttribute(el, key, props[key]);
    }
  }

  children.forEach(child => {
    child =
      child instanceof Element ? render(child) : document.createTextNode(child);
    el.appendChild(child);
  });

  return el;
}

let el = render(vertualDom);
document.getElementById("root").appendChild(el);
