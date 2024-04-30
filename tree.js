class TreeNode{
    constructor(val){
        this.val = val;
        this.left = null;
        this.right = null;
    }
}
    function inOrderTraversal(root){
        if(root ===null){
            return null;
        }   
        inOrderTraversal(root.left);
        console.log(root.val);
        inOrderTraversal(root.right);
    }
        
     
    function preOrderTraversal(root){
         if(root ===null){
            return null;
            
        } 
        console.log(root.val);
        preOrderTraversal(root.left);
        preOrderTraversal(root.right);
    }   
    
    function postOrderTraversal(root){
        if(root ===null){
            return null;
        } 
    
        postOrderTraversal(root.left);
        postOrderTraversal(root.right);
        console.log(root.val);
    }
    
const root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
console.log("InOrderTraversal")
inOrderTraversal(root);
console.log("PreOrderTraversal") 
preOrderTraversal(root);
console.log("PostOrderTraversal")
postOrderTraversal(root);