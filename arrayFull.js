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
    parentNode.children.splice(index, 1); //Remove 1 element from index
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

// DFS traversal
function traverseDFS(node) {
  console.log(node.value); // Visit the current node

  for (let child of node.children) {
    traverseDFS(child); // Recursively traverse each child
  }
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

console.log("DFS:");
traverseDFS(root);

console.log("BFS:");
traverseBFS(root);

console.log(root);

// Adding a node
const nodeG = createTreeNode("G");
addChild(nodeB, nodeG);

console.log(root);

// Removing a node
removeChild(nodeC, nodeE);

console.log(root);

// Checking if a node exists
console.log(doesNodeExist(root, "D")); // Output: true
console.log(doesNodeExist(root, "Z")); // Output: false
