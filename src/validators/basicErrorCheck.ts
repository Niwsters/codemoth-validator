// Node.JS virtual machine for running Javascript code safely within Javascript.
const runCodeInVM = require('./runCodeInVM')

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

module.exports = function (code: string, handleAfterExecution:Function): string {
	return runCodeInVM(code, formatErrorMessage, handleAfterExecution)
}
