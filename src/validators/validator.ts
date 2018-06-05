// Node.JS virtual machine for running Javascript code safely within Javascript.
const vm = require('vm')

const basicErrorCheck = require('./basicErrorCheck')
const validateHelloWorld = require('./validateHelloWorld')

exports.validate = function (code:string, requestedValidator:string):string {

	switch(requestedValidator) {
		case 'helloworld':
			return validateHelloWorld(code)
		default:
			return basicErrorCheck(code)
			break
	}
}
