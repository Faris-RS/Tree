function createTreeNode(value) {
  return {
    value: value,
    children: null,
    nextSibling: null,
  };
}

//sorted linked list, value:1,3,4,5 function to accept a value, 
// check if value is in linked list or not, 
// if present present, print value

function addChild(parentNode, childNode) {
  if (parentNode.children === null) {
    parentNode.children = childNode;
  } else {
    let current = parentNode.children;
    while (current.nextSibling !== null) {
      current = current.nextSibling;
    }
    current.nextSibling = childNode;
  }
}

function removeChild(parentNode, childNode) {
  if (parentNode.children === null) {
    return;
  }

  if (parentNode.children === childNode) {
    parentNode.children = childNode.nextSibling;
  } else {
    let current = parentNode.children;
    while (current.nextSibling !== null && current.nextSibling !== childNode) {
      current = current.nextSibling;
    }
    if (current.nextSibling === childNode) {
      current.nextSibling = childNode.nextSibling;
    }
  }

  // Set the nextSibling of the childNode to null
  childNode.nextSibling = null;
}

function changeChild(parentNode, currentChildNode, newChildNode) {
  if (parentNode.children === null) {
    return;
  }

  if (parentNode.children === currentChildNode) {
    parentNode.children = newChildNode;
    newChildNode.nextSibling = currentChildNode.nextSibling;
  } else {
    let current = parentNode.children;
    while (
      current.nextSibling !== null &&
      current.nextSibling !== currentChildNode
    ) {
      current = current.nextSibling;
    }
    if (current.nextSibling === currentChildNode) {
      current.nextSibling = newChildNode;
      newChildNode.nextSibling = currentChildNode.nextSibling;
    }
  }

  // Set the nextSibling of the currentChildNode to null
  currentChildNode.nextSibling = null;
}

function doesNodeExist(parentNode, targetNode) {
  if (parentNode === targetNode) {
    return true;
  }

  let current = parentNode.children;
  while (current !== null) {
    if (doesNodeExist(current, targetNode)) {
      return true;
    }
    current = current.nextSibling;
  }

  return false;
}

function depthFirstSearch(rootNode) {
  const stack = [rootNode];
  const visited = new Set();

  while (stack.length > 0) {
    const currentNode = stack.pop();
    visited.add(currentNode);
    console.log(currentNode.value);

    let child = currentNode.children;
    while (child !== null) {
      if (!visited.has(child)) {
        stack.push(child);
      }
      child = child.nextSibling;
    }
  }
}

function breadthFirstSearch(rootNode) {
  const queue = [rootNode];
  const visited = new Set();

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visited.add(currentNode);
    console.log(currentNode.value);

    let child = currentNode.children;
    while (child !== null) {
      if (!visited.has(child)) {
        queue.push(child);
      }
      child = child.nextSibling;
    }
  }
}

// Tree 1
const root1 = createTreeNode("Tree 1");
const a = createTreeNode("One");
const b = createTreeNode("Two");
const c = createTreeNode("Three");
const d = createTreeNode("Four");
addChild(root1, a);
addChild(root1, b);
addChild(root1, c);
addChild(root1, d);

// Tree 2
const root2 = createTreeNode("Tree 2");
const aa = createTreeNode("Alpha");
const bb = createTreeNode("Beta");
const cc = createTreeNode("Thetha");
const dd = createTreeNode("Gamma");
addChild(root2, aa);
addChild(root2, bb);
addChild(root2, cc);
addChild(root2, dd);

//   console.log(JSON.stringify(root1));
//   console.log(JSON.stringify(root2));

// Move "Two" from root1 to root2
changeChild(root1, b, root2);

console.log("Modified Root 1");
console.log(JSON.stringify(root1));
console.log("Modified Root 2");
console.log(JSON.stringify(root2));

//   // DFS
//   console.log("DFS:");
//   depthFirstSearch(mergedTree);

//   // BFS
//   console.log("BFS:");
//   breadthFirstSearch(mergedTree);
