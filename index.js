function resolvesecond2() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('success')
            
        }, 5000);
        
    })

    
}
async function testing(params) {
    console.log('name')
    const result=await resolvesecond2()
    console.log(result)
    
}
testing()