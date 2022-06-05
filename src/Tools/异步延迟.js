

const 异步延迟 = (time=2000,tip='延迟结束',isError=false) => {

    return new Promise((resolve,reject)=>{
      const timeout =   setTimeout(() => {
            if(isError){
                reject(tip)
                clearTimeout(timeout)
                return
            }
            resolve(tip)
            clearTimeout(timeout)
            // console.log(tip);
        }, time);
    })
}

export default 异步延迟

