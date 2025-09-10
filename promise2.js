let addTwoPromises = async function(promise1, promise2) {
   return await promise1 
};

    console.log(addTwoPromises(new Promise(resolve => setTimeout(() => resolve(2), 20))))