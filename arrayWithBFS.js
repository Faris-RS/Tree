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

function doesNodeExist(parentNode, targetNode) {
  if (parentNode === targetNode) {
    return true;
  }
  for (let child of parentNode.children) {
    if (doesNodeExist(child, targetNode)) {
      return true;
    }
  }
  return false;
}

// BFS traversal
function traverseBFS(root) {
  const queue = [root];

  while (queue.length > 0) {
    const currentNode = queue.shift();
    console.log(currentNode.value); // Visit the current node

    for (let i = 0; i < currentNode.children.length; i++) {
      queue.push(currentNode.children[i]); // Enqueue each child
    }
  }
}

const root = createTreeNode("Alphabet");

const number = createTreeNode("Numbers");
const a = createTreeNode("One");
const b = createTreeNode("Two");
const c = createTreeNode("Three");
const d = createTreeNode("Four");

const GreekAlphabet = createTreeNode("Greek");
const aa = createTreeNode("Alpha");
const bb = createTreeNode("Beta");
const cc = createTreeNode("Zeta");
const dd = createTreeNode("Delta");
const ee = createTreeNode("Epsilon");

addChild(root, number);
addChild(number, a);
addChild(number, b);
addChild(number, c);
addChild(number, d);

addChild(root, GreekAlphabet);
addChild(GreekAlphabet, aa);
addChild(GreekAlphabet, bb);
addChild(GreekAlphabet, cc);
addChild(GreekAlphabet, dd);
addChild(GreekAlphabet, ee);

console.log("BFS:");
traverseBFS(root);

// console.log(JSON.stringify(root));

// removeChild(root, GreekAlphabet);
// console.log(JSON.stringify(root));

// console.log(doesNodeExist(root, "Five"));
