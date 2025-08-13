function add(a,b){
 return a+b
}

function sub(a,b){
 return a-b
}

function calc(a,b,callback){
     console.log(callback(a,b))
}
calc(20,10,add)
calc(20,10,sub)
