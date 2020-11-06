const fs = require('fs');

const EXPECTED_FILEPATH = './target/message.txt'

const saveFileWithContent = async (req, callbackWhenFinish) => {
    const body = []

    // Event listeners are declared to work with dataflow(stream), it creates a buffer that concatenates
    // the data and turns into string when the stream hits the end(emits 'end' event). All the operations
    // done here are async, so the rest of the function will keep going and the result of the async ones
    // will enter the event cycle.

    // EventListener with a callback
    req.on('data', (chunk) => {
        console.log(chunk)
        body.push(chunk)
    })

    // It calls return because the eventListener created waits for the callback to be called and processed,
    // so if we didn't return it, the rest of the method would be executed, and we don't want that. 
    // EventListener with a callback
    await req.on('end', () =>{
        const parsedBody = Buffer.concat(body).toString()
        console.log('parsedBody: ', parsedBody)
        const message = parsedBody.split('=')[1]

        fs.writeFile(EXPECTED_FILEPATH, message, callbackWhenFinish)
    })
}

module.exports = {
    saveFileWithContent
}