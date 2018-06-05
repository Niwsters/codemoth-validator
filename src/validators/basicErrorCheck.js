// Node.JS virtual machine for running Javascript code safely within Javascript.
var runCodeInVM = require('./runCodeInVM');
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
module.exports = function (code, handleAfterExecution) {
    return runCodeInVM(code, formatErrorMessage, handleAfterExecution);
};
//# sourceMappingURL=basicErrorCheck.js.map