
 

module.exports = {
  
  neural_word: (w) => {
    const brain = require('brain.js')
    const fs = require('fs')
    console.log('test')
    const net = new brain.recurrent.LSTM();
    var data = JSON.parse(fs.readFileSync("neural_1.json", "utf8"));
    net.fromJSON(data);
    const output = net.run(w);
    console.log(output)
    return output
  }
} 