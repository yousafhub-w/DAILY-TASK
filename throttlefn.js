function throttle(fn, delay){
  let flag = true;
  return function(...args){
    if(flag){
      fn.apply(this,args);
      flag = false;
      setTimeout(()=> flag = true, delay);
    }
  }
}

const scrollHandle = throttle(()=>console.log("Scroll!"), 500);
