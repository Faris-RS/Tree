function createNode(value, left = null, right = null) {
  return { value, left, right };
}

function insertNode(root, value) {
  if (root === null) {
    return createNode(value);
  }
  if (value < root.value) {
    root.left = insertNode(root.left, value);
  } else if (value > root.value) {
    root.right = insertNode(root.right, value);
  }
  return root;
}

function findClosestValue(root, target) {
  let closestValue = root.value;
  let minDifference = Math.abs(root.value - target);

  while (root !== null) {
    const currentDifference = Math.abs(root.value - target);
    // const currentDifference = (root.value - target);

    if (currentDifference < minDifference) {
      minDifference = currentDifference;
      closestValue = root.value;
    }

    if (target === root.value) {
      return root.value;
    } else if (target < root.value) {
      root = root.left;
    } else {
      root = root.right;
    }
  }
  return closestValue;
}

function isBinarySearchTree(root) {
  return validateBST(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY);
}

function validateBST(node, min, max) {
  if (node === null) {
    return true;
  }

  const currentNodeValue = node.value;

  if (currentNodeValue <= min || currentNodeValue >= max) {
    return false;
  }

  const isLeftSubtreeValid = validateBST(node.left, min, currentNodeValue);
  const isRightSubtreeValid = validateBST(node.right, currentNodeValue, max);

  return isLeftSubtreeValid && isRightSubtreeValid;
}

// Example usage
let tree = null;
tree = insertNode(tree, 5);
tree = insertNode(tree, 3);
tree = insertNode(tree, 7);
tree = insertNode(tree, 1);
tree = insertNode(tree, 4);
tree = insertNode(tree, 6);
tree = insertNode(tree, 8);

console.log("Closest value to -2:", findClosestValue(tree, -2));
console.log("Closest value to 6:", findClosestValue(tree, 6));

console.log("Is the tree a binary search tree?", isBinarySearchTree(tree));
