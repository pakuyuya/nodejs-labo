const start = async () => {
    const text = process.argv[2] || 'echo.'
  
    logRepeatedly(text, 10, 1000)
    async function logRepeatedly(text, time, span) {
        for (let i=0; i<time; i++) {
            await sleep(span)
            process.stdout.write(text + '\r\n')
        }
    }
    function sleep (time) {
        return new Promise((resolve, reject) => {
            setTimeout( () => { resolve() }, time)
        })
    }
}

start()