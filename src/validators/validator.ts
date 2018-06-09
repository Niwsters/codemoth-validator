// Node.JS virtual machine for running Javascript code safely within Javascript.

import validateHelloWorld from './validateHelloWorld'
import validateSimpleGreeting from './validateSimpleGreeting'

exports.validate = function (code:string, requestedValidator:string):string {

	switch(requestedValidator) {
		case 'helloworld':
			return validateHelloWorld(code)
    case 'simplegreeting':
      return validateSimpleGreeting(code)
	}

  return "No validator found with name '" + requestedValidator + "' ):"
}
