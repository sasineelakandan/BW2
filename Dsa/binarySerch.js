class Node{
   constructor(val){
    this.val=val
    this.left=null
    this.right=null

   }
}


class BinarySearch{
    constructor(){
        this.root=null
    }

    insert(val){
        let node=new Node(val)
        if(!this.root){
            this.root=node
            return 
        }else{
            let curr=this.root
            while(true){
                if(curr.val>val){
                    if(!curr.left){
                        curr.left=node
                        return 
                    }
                    curr=curr.left
                }else{
                    if(!curr.right){
                        curr.right=node
                        return 
                    }
                    curr=curr.right
                }
            }
        }
    }
    dfs(){
        let res=[]
        let count=0
        function travisal(node){
            if(!node)return 
            if(!node.left&&!node.right) count++
            res.push(node.val)
            travisal(node.left)
            travisal(node.right)
          

        }
        travisal(this.root)
        return count
    }
    bfs(){
        let res=[]
        let queue=[]
        queue.push(this.root)
        while(queue.length){
            let node=queue.shift()
            res.push(node.val)
            if(node.left) queue.push(node.left) 
            if(node.right) queue.push(node.right) 
        }
        return res
    }
    totalNumberOfNOde(root=this.root){
        if(!root){
            return -1
        }
        const leftSide = this.totalNumberOfNOde(root.left)
        const rightSide = this.totalNumberOfNOde(root.right)
        return 1+Math.max(leftSide,rightSide)
    }
}


let bst=new BinarySearch()

bst.insert(30)
bst.insert(20)
bst.insert(10)
bst.insert(40)
bst.insert(50)
//console.log(bst.dfs())
console.log(bst.totalNumberOfNOde())