

// const arr=  ["joHN","RAm","dOe","paWan","syaM",]
// const arr=   [{name:"firstname",value:"John"},{name:"age",value:24},{name:"skills",value:"node"},{name:"skills",value:"python"},{name:"skills",value:"mongo"}]

// output :   {
//               firstname:"John" , age: 24 , skills: ["node","python","mongo"]
                 

// output :   {
//               n:["joHN","paWan"],m:["RAm","syaM"],e:["dOe"]
// //                  }

// const map={}


// for(let i=0;i<arr.length;i++){
//     if(map[arr[i].name]){
//         map[arr[i].name]+=1
//     }else{
//         map[arr[i].name]=1
//     }
    
    
// }
// let result={}
// for(let i=0;i<arr.length;i++){

//     if(map[arr[i].name]>1){
//         if(!result[arr[i].name]){
//             result[arr[i].name]=[]
//         }
//         result[arr[i].name].push(arr[i].value)
//     }else{
//         result[arr[i].name]=arr[i].value
//     }
// }

// console.log(result)

// let obj = Object.fromEntries(map)

// console.log(obj)


// const arr=[1,2,3,[2,5,[3,5,6],9,10]]


// function recursion(arr,res=[]){
//     for(let i=0;i<arr.length;i++){
//         if(Array.isArray(arr[i])){
//             recursion(arr[i],res)
//         }else{
//             res.push(arr[i])
//         }

//     }

//     return res
// }

// console.log(recursion(arr))



let arr = [2,3,4,5,6,7,8,9];

// for(let i=0;i<arr.length;i++){
//     if(arr[i]%2==0){
//         for(let j=0;j<i;j++){
//             if(arr[i]==arr[j]){
//                 arr.splice(i,1)
//                 i--
//                 break

//             }
//         }
//     }
// }


// console.log(arr);

// for(let i=0;i<arr.length;i++){
//     let notPrime=false
//   for(let j=2;j<arr[i];j++){
//    if(arr[i]%j==0){
//       notPrime=true
//       break
//    }
//   }if(!notPrime){
//     console.log(arr[i])
//   }
// }


// let str='abcabcdabcde'
// let curr=''
// let max=''
// for(let i=0;i<str.length;i++){
//   const index=curr.indexOf(str[i])
//   if(index!=-1){
//     curr=curr.slice(index+1)
//   }
//   curr+=str[i]

//   max=curr.length>max.length?curr:max
// }

// console.log(max)



// class Node{
//   constructor(val){
//     this.val=val
//     this.left=null
//     this.right=null
//   }
  
// }


// class Bst{
//  constructor(){
//   this.root=null
//  }

//  insert(val){
//   let node=new Node(val)
//    if(this.root==null){
//       this.root=node
//       return
//    }else{
//     let curr=this.root
//     while(true){

//       if(curr.val>val){
//         if(curr.left==null){
//            curr.left=node
//            return 
//         }else{
//           curr=curr.left
//         }
//       }else{
//         if(curr.right==null){
//           curr.right=node
//           return 
//        }else{
//          curr=curr.right
//        }
//       }
//     }
//    }
//  }

//  dfs(){
//   let curr=this.root
//   let queue=[]
//   function travisol(node){
//     queue.push(node.val)
//     if(node.left){
//        travisol(node.left)
//     }
//     if(node.right){
//       travisol(node.right)
//    }
//   }


//   travisol(curr)

//   console.log(queue)
//  }

// }

// const bst= new Bst()

// bst.insert(10)
// bst.insert(20)
// bst.insert(30)
// bst.insert(40)
// bst.insert(50)
// bst.dfs()
// console.log(JSON.stringify(bst.root))

// class Heap{
//   constructor(){
//       this.heap=[]
//   }

//   insert(val){
//       this.heap.push(val)
//       this.boubbleUp(this.heap.length-1)
//   }

//   boubbleUp(idx){
//   let parentidx=Math.floor((idx-1)/2)
//   if(idx>0&&this.heap[parentidx]>this.heap[idx]){
//       [this.heap[parentidx],this.heap[idx]]=[this.heap[idx],this.heap[parentidx]]
//       this.boubbleUp(parentidx)
//   }
//   }

//   remove(){
//       let max=this.heap[0]
//       this.heap[0]=this.heap.pop()
//       this.boubbledown(max)
//       return max
      

//   }

//   boubbledown(idx){
//      let parentIdx=idx
//      let leftchildidx=2*idx+1
//      let rightchildIdx=2*idx+2

//      if(leftchildidx<this.heap.length&&this.heap[parentIdx]>this.heap[leftchildidx]){
//       parentIdx=leftchildidx
//      }

//      if(rightchildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[rightchildIdx]){
//       parentIdx=rightchildIdx
//      }

//      if(parentIdx!==idx){
//        [this.heap[parentIdx],this.heap[idx]]=[this.haep[idx],this.heap[parentIdx]]
//        this.boubbledown(parentIdx)
//      }
//   }
// }

// const heap=new Heap()

// heap.insert(50)

// heap.insert(20)

// heap.insert(80)

// heap.insert(40)

// heap.insert(60)

// console.log(heap.remove())
// console.log(heap.heap)

class Heap{
  constructor(){
    this.heap=[]
  }
insert(val){
   this.heap.push(val)
   this.bubleUp(this.heap.length-1)
}
bubleUp(idx){
  let parentIdx=Math.floor((idx-1)/2)
  if(idx>0&&this.heap[parentIdx]>this.heap[idx]){
    [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
    this.bubleUp(parentIdx)
  }
}

remove(){
  let min=this.heap[0]
  this.heap[0]=this.heap.pop()
  this.bubledown(0)
  return min
}

bubledown(idx){
  let parentIdx=idx
  let leftchildidx=2*idx+1
  let rightchildIdx=2*idx+2

  if(leftchildidx<this.heap.length&&this.heap[parentIdx]>this.heap[leftchildidx]){
    parentIdx=leftchildidx
  }
  if(rightchildIdx<this.heap.length&&this.heap[parentIdx]>this.heap[rightchildIdx]){
    parentIdx=rightchildIdx
  }
  if(idx!=parentIdx){
    [this.heap[parentIdx],this.heap[idx]]=[this.heap[idx],this.heap[parentIdx]]
    this.bubledown(parentIdx)
  }

}

}

const heap=new Heap()

heap.insert(10)
heap.insert(60)
heap.insert(30)
heap.insert(90)
heap.insert(50)
console.log(heap.remove())
console.log(heap.remove())
console.log(heap.heap)

