
class Heap{
    constructor(){
        this.heap=[]
    }
    insert(val){
      this.heap.push(val)
      this.bublleUp(this.heap.length-1)
    }
    bublleUp(idx){
        let parenIdx=Math.floor((idx-1)/2)
        if(idx>0&&this.heap[parenIdx]>this.heap[idx]){
            [this.heap[parenIdx],this.heap[idx]]=[this.heap[idx],this.heap[parenIdx]]
            this.bublleUp(parenIdx)
        }
    }
  
    remove(){
      let min=this.heap[0]
      this.heap[0]=this.heap.pop()
      this.bublledown(0)
      return min
    }
  
    bublledown(idx){
      let parentIdx=idx
      let leftchildIdx=2*idx+1
      let rightchildIdx=2*idx+2
  
      if(leftchildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[leftchildIdx]){
        parentIdx=leftchildIdx
      }
  
      if(rightchildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[rightchildIdx]){
        parentIdx=rightchildIdx
      }
  
      if(parentIdx!=idx){
        [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
        this.bublledown(parentIdx)
    
      }
    }
  
  }
  
  const heap=new Heap()
  
  heap.insert(10)
  heap.insert(30)
  heap.insert(50)
  heap.insert(60)
  heap.insert(40)
  console.log(heap.remove())
  console.log(heap.remove())
  console.log(heap.remove())
  console.log(heap.heap)