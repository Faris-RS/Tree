function createTreeNode(value) {
  return {
    value: value,
    children: null,
    nextSibling: null,
  };
}

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

function mergeTrees(tree1, tree2) {
  if (!tree1) return tree2;
  if (!tree2) return tree1;

  const mergedNode = createTreeNode(tree1.value);
  const queue = [{ node1: tree1, node2: tree2, mergedNode }];

  while (queue.length > 0) {
    const { node1, node2, mergedNode } = queue.shift();

    if (node1 && node1.children) {
      let child1 = node1.children;
      while (child1 !== null) {
        const newChildNode = createTreeNode(child1.value);
        addChild(mergedNode, newChildNode);
        queue.push({
          node1: child1,
          node2: findMatchingNode(child1, node2),
          mergedNode: newChildNode,
        });
        child1 = child1.nextSibling;
      }
    }

    if (node2 && node2.children) {
      let child2 = node2.children;
      while (child2 !== null) {
        const matchingNode = findMatchingNode(child2, node1);
        if (!matchingNode) {
          const newChildNode = createTreeNode(child2.value);
          addChild(mergedNode, newChildNode);
          queue.push({
            node1: null,
            node2: child2,
            mergedNode: newChildNode,
          });
        }
        child2 = child2.nextSibling;
      }
    }
  }

  return mergedNode;
}

function findMatchingNode(node, targetTree) {
  if (!targetTree) return null;
  if (targetTree.value === node.value) return targetTree;

  let current = targetTree.children;
  while (current !== null) {
    const matchingNode = findMatchingNode(node, current);
    if (matchingNode) return matchingNode;
    current = current.nextSibling;
  }

  return null;
}

function splitTree(rootNode, splitNode) {
  if (rootNode === splitNode) {
    return { tree1: rootNode, tree2: null };
  }

  const queue = [rootNode];
  const visited = new Set();
  let splitNodeFound = false;

  while (queue.length > 0) {
    const currentNode = queue.shift();
    visited.add(currentNode);

    let child = currentNode.children;
    while (child !== null) {
      if (child === splitNode) {
        splitNodeFound = true;
        break;
      }
      queue.push(child);
      child = child.nextSibling;
    }

    if (splitNodeFound) {
      // Create a new tree starting from the splitNode
      const newTree = {
        value: splitNode.value,
        children: splitNode.children,
        nextSibling: null,
      };

      // Disconnect the splitNode from its parent
      removeChild(currentNode, splitNode);

      // Update the parent's nextSibling reference
      if (currentNode.children === null) {
        currentNode.nextSibling = null;
      }

      return { tree1: rootNode, tree2: newTree };
    }
  }
  return { tree1: rootNode, tree2: null }; // Split node not found, return the original tree
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

// console.log(JSON.stringify(root1));
// console.log(JSON.stringify(root2));

// Merge trees
const mergedTree = mergeTrees(root1, root2);
console.log(JSON.stringify(mergedTree));

const { tree1, tree2 } = splitTree(root1, a);
console.log(JSON.stringify(tree1));
console.log(JSON.stringify(tree2));

//   // DFS
//   console.log("DFS:");
//   depthFirstSearch(mergedTree);

//   // BFS
//   console.log("BFS:");
//   breadthFirstSearch(mergedTree);
