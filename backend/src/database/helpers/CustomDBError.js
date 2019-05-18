class CustomDBError extends Error {
  constructor(...args) {
    super(...args);
    this.originalMessage = this.message;
    this.message = 'Sorry, something unexpected happened!';
  }
}

module.exports = CustomDBError;