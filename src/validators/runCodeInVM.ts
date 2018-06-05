const vm = require('vm')

module.exports = function(code:string, handleError:Function, handleAfterExecution:Function):string {
  // Prepare a context for the Node.JS virtual machine.
  const sandbox = {
    output: 'Nothing written to output.',
    console: { // Rewrite the console.log command so that its output becomes safely accessible in the context.
      log: function (text) {
        sandbox.output = text
      }
    }
  }

  const context = new vm.createContext(sandbox)

  try {
    // Run the code in the virtual machine.
    const script = new vm.Script(code)

    script.runInContext(context)

    return handleAfterExecution(context)
  } catch(e) {
    return handleError(e.stack)
  }
}
