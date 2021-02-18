//Message Error in postman
class appError extends Error {
  #message;
  #statusCode;
  #status;
  constructor(message, statusCode) {
    super(message); //Extends từ parent class
    this.#statusCode = statusCode;
    this.#status = `${statusCode}`.startsWith("4") ? "fail" : "error";
    this.isOperational = true;

    Error.captureStackTrace(this, this.constructor);
  }
}

module.exports = appError;
