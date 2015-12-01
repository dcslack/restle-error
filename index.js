const RestleError = require('./restle-error');
const util = require('util');

AdapterError = function(options) {
  const type = options.type;
  const meta = options.meta;
  const reason = options.reason;

  this.status = 500;
  this.name = `AdapterError`;
  this.title = `Adapter failed to connect`
  this.detail = `The ${type} adapter failed to properly connect. Reason: ${reason}`;
}

NotFoundError = function(options) {
  const type = options.type;
  const id = options.id;

  this.status = 404;
  this.name = 'NotFoundError';
  this.title = `Resource not found`,
  this.detail = `A resource with type '${type}' and id '${id}' was not found.`;
}

ConflictError = function(options) {
  const first = options.first;
  const second = options.second;

  this.status = 409;
  this.name = `ConflictError`;
  this.title = `Conflicting values`,
  this.detail = `Tried to perform an operation on mismatched types: ${first} and ${second}`;
}

util.inherits(AdapterError, RestleError);
util.inherits(NotFoundError, RestleError);
util.inherits(ConflictError, RestleError);

module.exports = {
  AdapterError: AdapterError,
  NotFoundError: NotFoundError,
  ConflictError: ConflictError,
}
