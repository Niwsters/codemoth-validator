const util = require('util')
const vm = require('vm')

const sandbox = {
  x: 1
}

const script = new vm.Script('x += 10')
const context = new vm.createContext(sandbox)
script.runInContext(context)

console.log(util.inspect(sandbox))
