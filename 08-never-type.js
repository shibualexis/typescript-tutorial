function logError(message, code) {
    throw { message: message, errorCode: code };
}
logError("An error occurred", 500);
