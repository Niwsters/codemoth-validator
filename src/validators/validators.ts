// Node.JS virtual machine for running Javascript code safely within Javascript.
import runCodeInVM from './runCodeInVM'

function helloworld (code: string): string {
  return runCodeInVM(code, (context) => {
      if(context.output === "Hello World!") {
        return "Success: Code wrote 'Hello World!' in console!"
      } else {
        return "Failure: Code didn't write 'Hello World!' in console."
      }
  })
}

function simplegreeting (code: string): string {
  return runCodeInVM(code, (context) => {
    if(!context.greeting) {
      return "Failure: You didn't create a function named 'greeting'."
    }

    let name = "Test"
    let greeting = context.greeting(name)

    if(greeting === "Hello " + name + "!") {
      return "Success: The greeting function returned 'Hello [name]!'"
    }

    return "Failure: The greeting function did not return 'Hello [name]!'"
  })
}

function alicebobgreeting (code: string): string {
  return runCodeInVM(code, (context) => {
    let name, greeting

    if(!context.greeting) {
      return "Failure: You didn't create a function named 'greeting'."
    }

    name = "Test"
    greeting = context.greeting(name)
    let greetingSaysHello = false

    if(greeting === "Hello " + name + "!") {
      return "Failure: The greeting function says 'Hello [name]!' to other names than Alice and Bob."
    }

    if (greeting === "Hello!") {
      greetingSaysHello = true
    } else {
      return "Failure: The greeting doesn't say 'Hello!' to names other than Alice and Bob."
    }

    name = "Alice"
    greeting = context.greeting(name)
    let greetingSaysHelloAlice = false

    if(greeting === "Hello " + name + "!") {
      greetingSaysHelloAlice = true
    } else {
      return "Failure: The greeting function doesn't say 'Hello Alice!'"
    }

    name = "Bob"
    greeting = context.greeting(name)
    let greetingSaysHelloBob = false

    if(greeting === "Hello " + name + "!") {
      greetingSaysHelloBob = true
    } else {
      return "Failure: The greeting function doesn't say 'Hello Bob!'"
    }

    if(greetingSaysHello && greetingSaysHelloAlice && greetingSaysHelloBob) {
      return "Success: The greeting function works properly!"
    }

    return "Failure: The greeting function doesn't work properly."
  })
}

export { helloworld, simplegreeting, alicebobgreeting }
