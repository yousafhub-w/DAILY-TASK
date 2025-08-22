function exmp(){
    return new Promise((resolve,reject) => {
        setTimeout(()=> {
            console.log("Task Completed")
            reject();
        },3000);
    });
}
 async function run(){
    try{
        await exmp()
        console.log("success");
        
    }
    catch(error){
        console.log("failed");
        
    }
    
 }

 run()