import runCodeInVM from './runCodeInVM'

let afterExecutionCheck = function(context) {
  console.log(context)

  if(!context.greeting) {
    return "Failure: You didn't create a function named 'greeting'."
  }

  let name = "Test"
  let greeting = context.greeting(name)

  if(greeting === "Hello " + name + "!") {
    return "Success: The greeting function returned 'Hello [name]!'"
  }

  return "Failure: The greeting function did not return 'Hello [name]!'"
}

export default function (code: string): string {
	return runCodeInVM(code, afterExecutionCheck)
}
