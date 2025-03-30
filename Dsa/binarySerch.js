class Node{
    constructor(val){
      this.val=val
      this.left=null
      this.right=null
    }
  }
  
  
  class Bst{
    constructor(){
      this.root=null
    }
  
    insert(val){
     let node=new Node(val)
     if(this.root==null){
       this.root=node
       return
     }else{
      let curr=this.root
      while(true){
        if(curr.val>val){
          if(curr.left==null){
            curr.left=node
            return 
          }else{
            curr=curr.left
          }
        }else{
          if(curr.right==null){
            curr.right=node
            return
          }else{
            curr=curr.right
          }
        }
      }
     }
    }
    dfs(){
      let res=[]
      let curr=this.root
      function travisol(node){
        res.push(node.val)
        if(node.left)travisol(node.left)
        if(node.right)travisol(node.right)
        
      }
  
      travisol(curr)
      return res
    }
    bfs(){
      let res=[]
      let queue=[this.root]
      while(queue.length){
        let node=queue.shift()
        res.push(node.val)
        if(node.left)queue.push(node.left)
        if(node.right)queue.push(node.right)
        
      }
      return res
    }
    hightOf(node=this.root){
      if(!node) return 0
      let lefthight=this.hightOf(node.left)
      let righthight=this.hightOf(node.right)
  
      return 1+Math.max(lefthight,righthight)
    }
    isBalanced(node=this.root){
      if(node==null) return true
      let lefthight=this.hightOf(node.left)
      let righthight=this.hightOf(node.right)
     
      if(Math.abs(lefthight-righthight)>1){
         return false
      }
     
      return this.isBalanced(node.left)&&this.isBalanced(node.right)
     
    }
    degree(node){
       let degree=0
      if(node.left) degree++
      if(node.right) degree++
      return degree
    }
  
    find(val){
      let curr=this.root
      while(curr){
        if(curr.val==val){
           return curr
  
        }else if(curr.val<val){
  
          curr=curr.right
  
        }
        else{
          curr=curr.left
        }
      }
    }
  }
  
  const bst=new Bst()
  
  bst.insert(10)
  bst.insert(20)
  bst.insert(30)
  bst.insert(40)
  bst.insert(50)
  
  let findnode=bst.find(30)
  
  console.log(findnode)
  
  console.log(bst.degree(findnode))
  
  
  
  console.log(JSON.stringify(bst.root))