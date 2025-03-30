

class Node{
    constructor(){
      this.childeren={}
      this.isEnd=false
    }
  }
  
  class Trie{
    constructor(){
      this.root=new Node()
    }
  
    insert(word){
      let curr=this.root
      for(let i=0;i<word.length;i++){
       if(!curr.childeren[word[i]]){
        curr.childeren[word[i]]=new Node()
       }
       curr= curr.childeren[word[i]]
      }
      curr.isEnd=true
    }
    search(word){
      let curr=this.root
      for(let i=0;i<word.length;i++){
        if(!curr.childeren[word[i]]){
          return false
        }
        curr= curr.childeren[word[i]]
       }
       return curr.isEnd
    }
  
    autofill(word){
      let curr=this.root
      for(let i=0;i<word.length;i++){
        if(!curr.childeren[word[i]]){
          return -1
        }
        curr= curr.childeren[word[i]]
       }
       return this.print(curr,word,[])
    }
  
    print(node=this.root,str='',values=[]){
       if(node.isEnd){
        values.push(str)
       }
       for(let key in node.childeren){
        this.print(node.childeren[key],str+key,values)
       }
       return values
    }
  }
  
  const trie=new Trie()
  trie.insert('sasi')
  trie.insert('devasasi')
  console.log(trie.autofill('sa'))
  console.log(JSON.stringify(trie.root))