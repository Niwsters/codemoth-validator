// Node.JS virtual machine for running Javascript code safely within Javascript.
import runCodeInVM from './runCodeInVM'

let afterExecutionCheck = function(context) {
	if(context.output === "Hello World!") {
		return "Success: Code wrote 'Hello World!' in console!"
	} else {
		return "Failure: Code didn't write 'Hello World!' in console."
	}
}

export default function (code: string): string {
	return runCodeInVM(code, afterExecutionCheck)
}
