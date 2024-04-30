class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
function inOrderTraversalStack(root){
     const stack = [];
     let current =root;
     
    while(current !== null || stack.length>0){
        while(current!==null){
        stack.push(current);
        current = current.left;
    }
        current =stack.pop()
        console.log(current.val);
        current = current.right;
    }
}
function preOrderTraversalStack(root){
     const stack = [];
     if(root) stack.push(root);
     
     while(stack.length > 0){
        const current = stack.pop();
        console.log(current.val);
         
        if(current.right)stack.push(current.right);
        if(current.left)stack.push(current.left);
    }
}

const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log("InOrder Traversal Stack")
inOrderTraversalStack(root);
console.log("Pre Order Traversal Stack")
 preOrderTraversalStack(root);