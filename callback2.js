function career(name,admission, study, placement, interivews){
    admission(name)
          study(name)
            placement(name)
                interivews(name)
}
let a = (man)=>{
    console.log(`${man} got Admission` );
}
let b = (men)=>{
    console.log(`${men}  started to study`);
}
let c = (girl)=>{
    setTimeout(()=>{
        console.log(`${girl} got placed in a MNC`);
    },4000)
}
let d = (girls)=>{
    console.log(`${girls} attended many interviews`);  
}

career("Yousaf",a,b,c,d)