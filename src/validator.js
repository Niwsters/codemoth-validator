// Node.JS virtual machine for running Javascript code safely within Javascript.
var vm = require('vm');
var util = require('util');
exports.validate = function (code) {
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
        console.log(sandbox.output);
        return 'Your code did not throw an error!';
    }
    catch (e) {
        // Filter out all the irrelevant parts of the error message.
        var relevantErrorLines = e.stack.match(/^(?!evalmachine.*\n)(?!\s*at.*)(.+).*$/gm);
        // Convert the filtered out array into an error string with line breaks.
        var error_1 = '';
        relevantErrorLines.forEach(function (line) {
            error_1 += line + '\n';
        });
        return error_1;
    }
};
//# sourceMappingURL=validator.js.map