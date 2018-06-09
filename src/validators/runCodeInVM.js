"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var vm = require('vm');
var formatErrorMessage = function (stack) {
    // Filter out all the irrelevant parts of the error message.
    var relevantErrorLines = stack.match(/^(?!evalmachine.*\n)(?!\s*at.*)(.+).*$/gm);
    // Convert the filtered out array into an error string with line breaks.
    var error = '';
    relevantErrorLines.forEach(function (line) {
        error += line + '\n';
    });
    return error;
};
function default_1(code, handleAfterExecution) {
    // Prepare a context for the Node.JS virtual machine.
    var sandbox = {
        output: 'Nothing written to output.',
        console: {
            log: function (text) {
                sandbox.output = text;
            }
        }
    };
    var context = new vm.createContext(sandbox);
    try {
        // Run the code in the virtual machine.
        var script = new vm.Script(code);
        script.runInContext(context);
        return handleAfterExecution(context);
    }
    catch (e) {
        return formatErrorMessage(e.stack);
    }
}
exports.default = default_1;
//# sourceMappingURL=runCodeInVM.js.map