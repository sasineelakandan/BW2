

function hello(){
  const a=10
  const b=20
  const c=30

  return {a,b,c}
  

}


function hi (call){
    let{a,b,c} = call()
    let max=0
    if(a>max){
        max=a
    }
    if(b>max){
        max=b
    }
    if(c>max){
        max=c
    }

    return max
}


console.log(hi(hello))

