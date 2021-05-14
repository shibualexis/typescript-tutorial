function logError(message:string, code:number):never{
    throw {message:message, errorCode:code};
}


logError("An error occurred", 500); 