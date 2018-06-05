var vm = require('vm');
module.exports = function (code, handleError, handleAfterExecution) {
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
        return handleError(e.stack);
    }
};
//# sourceMappingURL=runCodeInVM.js.map