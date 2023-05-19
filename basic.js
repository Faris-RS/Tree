function createTreeNode(value) {
  return {
    value: value,
    children: [],
  };
}

function addChild(parentNode, childNode) {
  parentNode.children.push(childNode);
}

// Creating a sample tree
const root = createTreeNode("A");

const nodeB = createTreeNode("B");
const nodeC = createTreeNode("C");
const nodeD = createTreeNode("D");

const nodeE = createTreeNode("E");
const nodeF = createTreeNode("F");

addChild(root, nodeB);
addChild(root, nodeC);
addChild(root, nodeD);

addChild(nodeC, nodeE);
addChild(nodeC, nodeF);

console.log(root);
