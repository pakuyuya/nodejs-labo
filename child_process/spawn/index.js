'use strict'
const child_process = require('child_process')

const start = async () => {
    let proc = child_process.spawn('node', ['echo_span1s10times.js', 'test']);
    proc.stdout.on('data', (data) => {
        console.log(data.toString('utf-8'))
    })

    proc.stderr.on('data', (data) => {
        console.log(data.toString('utf-8'))
    })

    proc.on('close', (code) => {
      console.log(`exit ${code}`)
    })
        
    let x = child_process.spawn('go', ['-version']);
    x.stdout.on('data', (data) => {
      console.log(data)
    })

    logRepeatedly('main', 10, 1000)

    async function logRepeatedly(text, time, span) {
        for (let i=0; i<time; i++) {
            await sleep(span)
            console.log(text)
        }
    }

    function sleep (time) {
        return new Promise((resolve, reject) => {
            setTimeout( () => { resolve() }, time)
        })
    }
}

start()