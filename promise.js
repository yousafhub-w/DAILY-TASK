function weatherData(){
    return new Promise ((resolve,reject)=>{
        setTimeout(() => {
            resolve("Sunny")
        },2000);
    })
}

function weatherDataIcon(weather){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            switch (weather){
                case 'Sunny':
                    resolve("☀️")
                    break
                case 'Cloudy':
                    resolve("☁️")    
                    break
                case 'Rainy':
                    resolve("🌦️")    
                    break
                default:
                    reject('NO ICON FOUND')
            }
        },2000)
    })
}

function onSuccess(data){
    console.log(`Success ${data}`);
}
function onError(error){
    console.log(`Error: ${error}`);
}


weatherData()
.then(weatherDataIcon)
.then(onSuccess, onError)
