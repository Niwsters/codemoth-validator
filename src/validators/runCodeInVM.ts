const vm = require('vm')

let formatErrorMessage = function (stack:string):string {
	// Filter out all the irrelevant parts of the error message.
	let relevantErrorLines:Array<string> = stack.match(/^(?!evalmachine.*\n)(?!\s*at.*)(.+).*$/gm)

	// Convert the filtered out array into an error string with line breaks.
	let error:string = ''
	relevantErrorLines.forEach((line:string) => {
		error += line + '\n'
	})

	return error
}

export default function(code:string, handleAfterExecution:Function):string {
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
    return formatErrorMessage(e.stack)
  }
}
