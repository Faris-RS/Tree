function createTreeNode(value) {
  return {
    value: value,
    children: [],
  };
}

function addChild(parentNode, childNode) {
  parentNode.children.push(childNode);
}

function mirrorTree(node) {
  node.children.reverse(); // Reverse the order of children for the current node
  for (let child of node.children) {
    mirrorTree(child); // Recursively mirror each child
  }
}

const root = createTreeNode("Root");
const a = createTreeNode("a");
const b = createTreeNode("b");
const c = createTreeNode("c");
const d = createTreeNode("d");

const aa = createTreeNode("aa");
const ab = createTreeNode("ab");
const ac = createTreeNode("ac");

const ba = createTreeNode("ba");
const bb = createTreeNode("bb");

const ca = createTreeNode("ca");
const cb = createTreeNode("cb");
const cc = createTreeNode("cc");
const cd = createTreeNode("cd");
const ce = createTreeNode("ce");

const caa = createTreeNode("cca");

addChild(root, a);
addChild(root, b);
addChild(root, c);

addChild(a, aa);
addChild(a, ab);
addChild(a, ac);

addChild(b, ba);
addChild(b, bb);

addChild(c, ca);
addChild(c, cb);
addChild(c, cc);
addChild(c, cd);
addChild(c, ce);

addChild(ca, caa);

console.log("Before mirroring");
console.log(JSON.stringify(root));

mirrorTree(root);

console.log("After mirroring");
console.log(JSON.stringify(root));
