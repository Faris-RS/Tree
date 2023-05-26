function createTreeNode(value) {
  return {
    value: value,
    children: [],
  };
}

function addChild(parentNode, childNode) {
  parentNode.children.push(childNode);
}

function removeChild(parentNode, childNode) {
  const index = parentNode.children.indexOf(childNode);
  if (index !== -1) {
    parentNode.children.splice(index, 1);
  }
}

function doesNodeExist(parentNode, targetValue) {
  if (parentNode.value === targetValue) {
    return true;
  }
  for (let child of parentNode.children) {
    if (doesNodeExist(child, targetValue)) {
      return true;
    }
  }
  return false;
}

function breadthFirstSearch(root) {
  const queue = [root];
  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value);
    for (let i = 0; i < currentNode.children.length; i++) {
      queue.push(currentNode.children[i]);
    }
  }
}

function depthFirstSearch(node) {
  console.log(node.value);
  for (let child of node.children) {
    depthFirstSearch(child);
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

addChild(root, a)
addChild(root, b)
addChild(root, c)

addChild(a, aa)
addChild(a, ab)
addChild(a, ac)

addChild(b, ba)
addChild(b, bb)

addChild(c, ca)
addChild(c, cb)
addChild(c, cc)
addChild(c, cd)
addChild(c, ce)

addChild(ca, caa)

console.log(JSON.stringify(root));