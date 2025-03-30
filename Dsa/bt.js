

class Node{
    constructor(val){
      this.val=val
      this.left=null
      this.right=null
    }
  }
  
  
  
  class Bt{
    constructor(){
      this.root=null
    }
  
    insert(val){
      let node=new Node(val)
       if(this.root==null){
        this.root=node
        return 
       }
       else{
        
        let queue=[this.root]
        while(queue.length){
          console.log(queue)
         let curr=queue.shift()
         if(curr.left==null){
           curr.left=node
           return
         }else{
          queue.push(curr.left)
         }
  
         if(curr.right==null){
          curr.right=node
          return
        }else{
          queue.push(curr.right)
        }
        }
       }
    }
  }
  
  const bst=new Bt()
    
    bst.insert(10)
    bst.insert(20)
    bst.insert(30)
    bst.insert(40)
    bst.insert(50)
    
   
    
    
    
    console.log(JSON.stringify(bst.root))