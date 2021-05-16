"use strict";
function logError(message, code) {
    throw { message: message, errorCode: code };
}
logError("An error occurred", 500);
//# sourceMappingURL=08-never-type.js.map