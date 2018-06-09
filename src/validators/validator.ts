// Node.JS virtual machine for running Javascript code safely within Javascript.

import {
  helloworld,
  simplegreeting,
  alicebobgreeting
} from './validators'

exports.validate = function (code:string, requestedValidator:string):string {

	switch(requestedValidator) {
		case 'helloworld':
			return helloworld(code)
    case 'simplegreeting':
      return simplegreeting(code)
    case 'alicebobgreeting':
      return alicebobgreeting(code)
	}

  return "No validator found with name '" + requestedValidator + "' ):"
}
