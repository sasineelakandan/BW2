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
    }else{
      let queue=[this.root]
      while(queue.length>0){
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

const bt=new Bt()
bt.insert(10)
bt.insert(50)
bt.insert(20)
bt.insert(60)
bt.insert(10)

console.log(JSON.stringify(bt.root))
