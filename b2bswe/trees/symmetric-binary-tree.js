//test if a binary tree is symmetric

/*
For example, this binary tree is symmetric: 

     1
   /   \
  2     2
 / \   / \
3   4 4   3

But the following is not:
    1
   / \
  2   2
   \   \
   3    3

*/

class Node {
  constructor(element) {
    this.key = element;
    this.left = null;
    this.right = null;
  }
}

let root = null;

//returns true if trees with roots and root1 & roo2 are mirror

function isMirror(node1, node2) {
  //if both trees are empty, then they are mirror image
  if (node1 === null && node2 === null) {
    return true;
  }

  //for two trees to be mirror images, the following three conditions must be met
  // 1 - their root node key must be same, 2 - left subtree of left tree and right subtree of right subtree have to be mirror images
  // 3 - right subtree of left tree and lef subtree of right tree have to be mirror images
  if (node1 !== null && node2 !== null && node1.key === node2.key) {
    return (
      isMirror(node1.left, node2.right) && isMirror(node1.right, node2.left)
    );
  }

  //if none of the above conditions are true, then it's not a mirror
  return false;
}

//returns true if the tree is symmetric - mirror image of itself
function isSymmetric() {
  //check if tree is mirror of itself
  return isMirror(root, root);
}
