class ExpressError extends Error{ //error class
    constructor(message,statusCode){
        super();
        this.message = message;
        this.statusCode = statusCode;
    }
}
module.exports = ExpressError;