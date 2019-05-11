const {
  ValidationError
} = require('objection');

const {
  wrapError,
  DBError,
  UniqueViolationError,
  NotNullViolationError
} = require('db-errors');

const customDBErrorHandler = err => {
  throw new Error('Database error!')
  err = wrapError(err);

  if (err instanceof UniqueViolationError) {
    console.log(`Unique constraint ${err.constraint} failed for table ${err.table} and columns ${err.columns}`);
  } else if (err instanceof NotNullViolationError) {
    console.log(`Not null constraint failed for table ${err.table} and column ${err.column}`);
  } else if (err instanceof DBError) {
    console.log(`Some unknown DB error ${dbError.nativeError}`);
  }

  throw err
}

module.exports = customDBErrorHandler;