// Node.JS virtual machine for running Javascript code safely within Javascript.
const vm = require('vm')

exports.validate = function (code: string): string {
  // Prepare a context for the Node.JS virtual machine.
  const sandbox = {}
  const context = new vm.createContext(sandbox)

  try {
    // Run the code in the virtual machine.
    const script = new vm.Script(code)
    script.runInContext(context)

    return 'Your code did not throw an error!'
  } catch(e) {
    // Filter out all the irrelevant parts of the error message.
    let relevantErrorLines:Array<string> = e.stack.match(/^(?!evalmachine.*\n)(?!\s*at.*)(.+).*$/gm)

    // Convert the filtered out array into an error string with line breaks.
    let error:string = ''
    relevantErrorLines.forEach((line:string) => {
      error += line + '\n'
    })

    return error
  }
}
