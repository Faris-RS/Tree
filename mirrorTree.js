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

  // Set the nextSibling of the childNode to null
  childNode.nextSibling = null;
}

function mirrorTree(tree) {
  if (!tree) {
    return null;
  }

  return {
    value: tree.value,
    left: mirrorTree(tree.right),
    right: mirrorTree(tree.left),
  };
}

// Example tree structure
// const tree = {
//   value: 1,
//   left: {
//     value: 2,
//     left: {
//       value: 4,
//       left: null,
//       right: null,
//     },
//     right: null,
//   },
//   right: {
//     value: 3,
//     left: null,
//     right: {
//       value: 5,
//       left: null,
//       right: null,
//     },
//   },
// };

// Tree 1
const tree = createTreeNode("Tree 1");
const a = createTreeNode("One");
const b = createTreeNode("Two");
const c = createTreeNode("Three");
const d = createTreeNode("Four");
addChild(tree, a);
addChild(tree, b);
addChild(tree, c);
addChild(tree, d);

//   console.log(JSON.stringify(root1));

// Mirror the tree
const mirroredTree = mirrorTree(tree);

// Output the mirrored tree
console.log(mirroredTree);
