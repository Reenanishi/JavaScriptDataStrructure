# Tree

# Tree Creation

```
class TreeNode {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new TreeNode(value);

    if (!this.root) {
      this.root = newNode;
    } else {
      this.insertNode(this.root, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.value < node.value) {
      if (!node.left) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (!node.right) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  // Other tree traversal methods can be added as needed
}

// Example usage:
const bst = new BinarySearchTree();

bst.insert(10);
bst.insert(5);
bst.insert(15);
bst.insert(2);
bst.insert(7);
bst.insert(12);
bst.insert(20);

console.log(bst);
```

# Pre-order traversal: Root -> Left -> Right
```
  preOrderTraversal(node) {
    if (node !== null) {
      console.log(node.value);
      this.preOrderTraversal(node.left);
      this.preOrderTraversal(node.right);
    }
  }
```

# In-order traversal: Left -> Root -> Right
```

  inOrderTraversal(node) {
    if (node !== null) {
      this.inOrderTraversal(node.left);
      console.log(node.value);
      this.inOrderTraversal(node.right);
    }
  }
```

# Post-order traversal: Left -> Right -> Root
```
  postOrderTraversal(node) {
    if (node !== null) {
      this.postOrderTraversal(node.left);
      this.postOrderTraversal(node.right);
      console.log(node.value);
    }
  }
```

#  Level-order traversal using a queue
```
  levelOrderTraversal() {
    const queue = [];
    queue.push(this.root);

    while (queue.length > 0) {
      const currentNode = queue.shift();
      if (currentNode !== null) {
        console.log(currentNode.value);
        queue.push(currentNode.left);
        queue.push(currentNode.right);
      }
    }
  }
```


# Example usage:
```
const binaryTree = new BinaryTree();

binaryTree.insert(10);
binaryTree.insert(5);
binaryTree.insert(15);
binaryTree.insert(2);
binaryTree.insert(7);
binaryTree.insert(12);
binaryTree.insert(20);

console.log("Pre-order traversal:");
binaryTree.preOrderTraversal(binaryTree.root);

console.log("\nIn-order traversal:");
binaryTree.inOrderTraversal(binaryTree.root);

console.log("\nPost-order traversal:");
binaryTree.postOrderTraversal(binaryTree.root);

console.log("\nLevel-order traversal:");
binaryTree.levelOrderTraversal();
```
